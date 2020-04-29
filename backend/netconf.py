from liberouterapi import socketio, auth
import netconf2 as nc
import json
from eventlet.timeout import Timeout
from flask import request
import logging
from .sockets import *
import os
import yang
from .schemas import get_schema

sessions = {}
log = logging.getLogger(__name__)

@auth.required()
def connect_device():
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)
    data = request.get_json()

    nc.setSchemaCallback(get_schema, session)
    site_root = os.path.realpath(os.path.dirname(__file__))
    path = os.path.join(site_root, 'userfiles', username)
    nc.setSearchpath(path)
    if 'password' in data and data['password'] != '':
        ssh = nc.SSH(data['username'], password = data['password'])
    else:
        ssh = nc.SSH(data['username'])
        ssh.setAuthPasswordClb(auth_password, session['session_id'])
        ssh.setAuthInteractiveClb(auth_interactive, session['session_id'])
    ssh.setAuthHostkeyCheckClb(hostkey_check, {'session': session, 'device' : data})

    try:
        ncs = nc.Session(data['hostname'], int(data['port']), ssh)
    except Exception as e:
        nc.setSchemaCallback(None)
        return json.dumps({'success': False, 'code': 500 ,'message': str(e)})
    nc.setSchemaCallback(None)

    if not username in sessions:
        sessions[username] = {}

    # use key (as hostname:port:session-id) to store the created NETCONF session
    key = ncs.host + ":" + str(ncs.port) + ":" + ncs.id
    sessions[username][key] = {}
    sessions[username][key]['session'] = ncs
    print(key)

    # update inventory's list of schemas
    # schemas_update(session)

    return json.dumps({'success': True, 'session-key': key})




def auth_common(session_id):
    global log
    result = None
    timeout = Timeout(60)
    try:
        # wait for response from the frontend
        data = sio_wait(session_id)
        result = data['password']
    except Timeout:
        # no response received within the timeout
        log.info("socketio: auth request timeout.")
    except KeyError:
        # no password
        log.info("socketio: invalid credential data received.")
    finally:
        # we have the response
        sio_clean(session_id)
        timeout.cancel()

    return result


def auth_interactive(name, instruction, prompt, priv):
    sio_emit('device_auth', {'id': priv, 'type': name, 'msg': instruction, 'prompt': prompt})
    return auth_common(priv)

def auth_password(username, hostname, priv):
    sio_emit('device_auth', {'id': priv, 'type': 'Password Authentication', 'msg': username + '@' + hostname})
    return auth_common(priv)


def hostkey_check():
    print("HOSTKEY CHECK CALLED")


""" SESSION HANDLING """
@auth.required()
def session_alive(key):
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)

    if not username in sessions:
        sessions[username] = {}

    if key in sessions[username]:
        return json.dumps({'success': True, 'code': 200})
    else:
        return json.dumps({'success': False, 'code': 404, 'message': 'Session not found'})