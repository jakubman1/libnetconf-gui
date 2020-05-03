from liberouterapi import socketio, auth
import netconf2 as nc
import json
from eventlet.timeout import Timeout
from flask import request
import logging
from .sockets import *
import os
import yang

log = logging.getLogger(__name__)

def get_all_schema_names(username):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return [
        file for file in os.listdir(os.path.join(site_root, 'userfiles', username))
            if os.path.splitext(file)[1] == '.yang' or os.path.splitext(file)[1] == '.yin'
    ]

def get_schema_detail(username, schema):
    if os.path.splitext(schema)[1] == '.yang' or os.path.splitext(schema)[1] == '.yin':
        site_root = os.path.realpath(os.path.dirname(__file__))
        with open(os.path.join(site_root, 'userfiles', username, schema), 'r') as f:
            return f.read()


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
            format = yang.LYS_IN_YANG
            pass
        elif data['filename'].lower()[len(data['filename']) - 4:] == '.yin':
            format = yang.LYS_IN_YIN
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
            path = os.path.join(site_root, 'userfiles', priv['user'].username, data['filename'])
            if not os.path.exists(os.path.dirname(path)):
                try:
                    os.makedirs(os.path.dirname(path))
                except OSError as exc:  # Guard against race condition
                    if exc.errno != errno.EEXIST:
                        raise
            with open(path, 'w+') as schema_file:
                schema_file.write(data['data'])
        except Exception as e:
            log.error(e)
            print(e)
    return result