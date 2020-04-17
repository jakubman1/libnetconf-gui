from liberouterapi import socketio, auth
import netconf2 as nc
import json
from eventlet.timeout import Timeout
from flask import request

sessions = {}

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
        ncs = nc.Session(data['hostname'], data['port'], ssh)
    except Exception as e:
        nc.setSchemaCallback(None)
        return json.dumps({'success': False, 'error-msg': str(e)})
    nc.setSchemaCallback(None)

    if not user.username in sessions:
        sessions[user.username] = {}

    # use key (as hostname:port:session-id) to store the created NETCONF session
    key = ncs.host + ":" + str(ncs.port) + ":" + ncs.id
    sessions[user.username][key] = {}
    sessions[user.username][key]['session'] = ncs
    print(key)

    # update inventory's list of schemas
    # schemas_update(session)

    return json.dumps({'success': True, 'session-key': key})


def get_schema():
    print("GET SCHEMA CALLED")

def auth_common():
    pass
def auth_interactive():
    print("AUTH CALLED")
def auth_password():
    print("AUTH 2 CALLED")

def hostkey_check():
    print("HOSTKEY CHECK CALLED")