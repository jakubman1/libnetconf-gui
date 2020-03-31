from liberouterapi import db, auth, config
from liberouterapi.dbConnector import dbConnector
import json

from .profiles import *
from .devices import *

@auth.required()
def get_username_from_session():
    session = auth.lookup(request.headers.get('lgui-Authorization', None))
    return session['user'].username

@auth.required()
def profiles():
    return json.dumps(get_profiles(get_username_from_session()))

@auth.required()
def profile_add():
    data = request.json
    name = data['profile']
    if add_profile(get_username_from_session(), name):
        return json.dumps({success: True, code: 200})
    else:
        return json.dumps({success: False, code: 500})

@auth.required()
def profile_get(profile_name):
    return json.dumps(get_profile_devices(get_username_from_session(), profile_name, None))

@auth.required()
def profile_set(profile_name):
    data = request.json
    # name = data['profile']
    val = data['value']
    if set_profile(get_username_from_session(), profile_name, val):
        return json.dumps({success: True, code: 200})
    else:
        return json.dumps({success: False, code: 500})