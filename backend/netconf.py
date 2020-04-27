from liberouterapi import socketio, auth
import netconf2 as nc
import json
from eventlet.timeout import Timeout
from flask import request
import logging
from .sockets import *
import os

sessions = {}
log = logging.getLogger(__name__)

@auth.required()
def connect_device():
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'])
    data = request.get_json()

    nc.setSchemaCallback(get_schema, session)
    # nc.setSearchPath(data['path'])
    if 'password' in data:
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


def get_schema(name, revision, submod_name, submod_revision, priv):
    global log
    # ask frontend/user for missing schema
    params = {'id': priv['session_id'], 'name': name, 'revision': revision, 'submod_name': submod_name,
              'submod_revision': submod_revision}
    socketio.emit('getschema', params, callback=sio_send)
    result = (None, None)
    timeout = Timeout(300)
    data = None
    try:
        # wait for response from the frontend
        data = sio_wait(priv['session_id'])
        if data['filename'].lower()[len(data['filename']) - 5:] == '.yang':
            # format = yang.LYS_IN_YANG
            pass
        elif data['filename'].lower()[len(data['filename']) - 4:] == '.yin':
            # format = yang.LYS_IN_YIN
            pass
        else:
            return result
        result = (format, data['data'])
    except Timeout:
        # no response received within the timeout
        print("socketio: getschema timeout.")
    except (KeyError, AttributeError) as e:
        # invalid response
        print(e)
        print("socketio: invalid getschema_result received.")
    finally:
        # we have the response
        sio_clean(priv['session_id'])
        timeout.cancel()

        # store the received file
        try:
            site_root = os.path.realpath(os.path.dirname(__file__))
            with open(os.path.join(site_root, 'userfiles', priv['user'].username, data['filename']), 'w') as schema_file:
                schema_file.write(data['data'])
        except Exception as e:
            log.error(e)
            pass

    return result

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