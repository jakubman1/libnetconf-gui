from liberouterapi import socketio, auth, db, config
from liberouterapi.dbConnector import dbConnector
import netconf2 as nc
import json
from eventlet.timeout import Timeout
from flask import request
import logging
from .sockets import *
import os
import yang
from .schemas import get_schema
from .devices import get_device_from_session_data, update_device


sessions = {}
log = logging.getLogger(__name__)


"""
netconf session (ncs)
static PyGetSetDef ncSessionGetSetters[] = {
    {"id", (getter)ncSessionGetId, NULL, "NETCONF Session id.", NULL},
    {"host", (getter)ncSessionGetHost, NULL, "Host where the NETCONF Session is connected.", NULL},
    {"port", (getter)ncSessionGetPort, NULL, "Port number where the NETCONF Session is connected.", NULL},
    {"user", (getter)ncSessionGetUser, NULL, "Username of the user connected with the NETCONF Session.", NULL},
    {"transport", (getter)ncSessionGetTransport, NULL, "Transport protocol used for the NETCONF Session.", NULL},
    {"version", (getter)ncSessionGetVersion, NULL, "NETCONF Protocol version used for the NETCONF Session.", NULL},
    {"capabilities", (getter)ncSessionGetCapabilities, NULL, "Capabilities of the NETCONF Session.", NULL},
    {"context", (getter)ncSessionGetContext, NULL, "libyang context of the NETCONF Session.", NULL},
    {NULL} /* Sentinel */
};
"""

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
        ssh = nc.SSH(data['username'], password=data['password'])
    else:
        ssh = nc.SSH(data['username'])
        ssh.setAuthPasswordClb(auth_password, session['session_id'])
        ssh.setAuthInteractiveClb(auth_interactive, session['session_id'])
    ssh.setAuthHostkeyCheckClb(hostkey_check, {'session': session, 'device': data})

    try:
        ncs = nc.Session(data['hostname'], int(data['port']), ssh)
    except Exception as e:
        nc.setSchemaCallback(None)
        return json.dumps({'success': False, 'code': 500, 'message': str(e)})
    nc.setSchemaCallback(None)

    if not username in sessions:
        sessions[username] = {}

    # use key (as hostname:port:session-id) to store the created NETCONF session
    key = ncs.host + ":" + str(ncs.port) + ":" + ncs.id
    sessions[username][key] = {}
    sessions[username][key]['session'] = ncs

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
    socket_emit('device_auth', {'id': priv, 'type': name, 'msg': instruction, 'prompt': prompt})
    return auth_common(priv)


def auth_password(username, hostname, priv):
    socket_emit('device_auth', {'id': priv, 'type': 'Password Authentication', 'msg': username + '@' + hostname})
    return auth_common(priv)


def hostkey_check(hostname, state, keytype, hexa, priv):
    if 'fingerprint' in priv['device']:
        # check according to the stored fingerprint from previous connection
        if hexa == priv['device']['fingerprint']:
            return True
        elif state != 2:
            log.error("Incorrect host key state")
            state = 2

        # ask frontend/user for hostkey check
    params = {'id': priv['session']['session_id'], 'hostname': hostname, 'state': state, 'keytype': keytype,
              'hexa': hexa, 'device': priv['device']}
    socket_emit('hostcheck', params)

    result = False
    timeout = Timeout(30)
    try:
        # wait for response from the frontend
        data = sio_wait(priv['session']['session_id'])
        result = data['result']
    except Timeout:
        # no response received within the timeout
        log.info("socketio: hostcheck timeout.")
    except KeyError:
        # invalid response
        log.error("socketio: invalid hostcheck_result received.")
    finally:
        # we have the response
        sio_clean(priv['session']['session_id'])
        timeout.cancel()

    if result:
        # store confirmed fingerprint for future connections
        priv['device']['fingerprint'] = hexa
        update_device(priv['device']['id'], {'fingerprint': hexa})

    return result


""" SESSION HANDLING """
@auth.required()
def sessions_get_open():
    """
    Get all open sessions belonging to the user
    :return: Array of session keys and devices belonging to sessions. Device names will not be loaded.
    """
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)
    netconf_db = dbConnector('netconf', provider='mongodb', config={'database': config['netconf']['database']})
    netconf_coll = netconf_db.db[config['netconf']['collection']]

    if username in sessions:
        result = []
        for key in sessions[username].keys():
            ncs = sessions[username][key]['session']
            device = get_device_from_session_data(ncs.host, ncs.port, username, ncs.user, netconf_coll)
            if device is not None:
                result.append({'key': key, 'device': device})
        return json.dumps(result)
    else:
        return json.dumps([])


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


@auth.required()
def session_destroy(key):
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)
    if not username in sessions:
        sessions[username] = {}

    if key in sessions[username]:
        del sessions[username][key]
        return json.dumps({'success': True, 'code': 200})
    else:
        return json.dumps({'success': False, 'code': 404, 'message': 'Session not found'})


@auth.required()
def session_destroy_all():
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)
    if username in sessions:
        del sessions[username]
    return json.dumps({'success': True, 'code': 200})


@auth.required()
def session_rpc_get():
    """
    code 500: wrong argument
    code 404: session invalid -> try reconnecting
    code 410: connection gone -> remove session, try reconnecting
    code 418: Error in processing netconf request (nothing to do with a teapot)
    """
    global sessions
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    username = str(session['user'].username)
    req = request.args.to_dict()
    if not 'key' in req:
        return json.dumps({'success': False, 'code': 500, 'message': 'Missing session key.'})
    if not 'recursive' in req:
        return json.dumps({'success': False, 'code': 500, 'message': 'Missing recursive flag.'})

    if not username in sessions:
        sessions[username] = {}

    key = req['key']
    if not key in sessions[username]:
        return json.dumps({'success': False, 'code': 404, 'message': 'Invalid session key.'})

    try:
        sessions[username][key]['data'] = sessions[username][key]['session'].rpcGet()
    except ConnectionError as e:
        del sessions[username][key]
        return json.dumps({'success': False, 'code': 410, 'message': str(e)})
    except nc.ReplyError as e:
        err_list = []
        for err in e.args[0]:
            err_list.append(str(err))
        return json.dumps({'success': False, 'code': 418, 'message': str(e)})

    if not 'path' in req:
        return data_info_roots(sessions[username][key]['data'], True if req['recursive'] == 'true' else False)
    else:
        return data_info_subtree(sessions[username][key]['data'], req['path'],
                                True if req['recursive'] == 'true' else False)

