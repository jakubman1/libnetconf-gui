import json
import os
from flask import request

"""
Profile entry format:
'profiles': [{
    'name': 'profile name',
    'devices': [
        {
            'id': device id,
            'subscriptions': [list of channels ](optional)
        }
    ] (optional)
}]
"""

# Get path to server root
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))


"""
File manipulation and cache
"""
file_cache = {}

def get_user_file(username):
    return os.path.join(SITE_ROOT, 'userfiles', username + '.json')

def clear_profile_cache():
    global file_cache
    file_cache = {}

def read_user_profiles(username):
    global file_cache
    if username in file_cache.keys():
        return file_cache[username]
    else:
        file = get_user_file(username)
        with open(file, 'a+') as f:
            try:
                f.seek(0)
                data = json.load(f)
            except Exception as e: # File did not exist or was not a valid JSON
                f.seek(0)
                json.dump({'active': 'default','profiles': [{'name':'default'}]}, f)
                data = {'active': 'default','profiles': [{'name':'default'}]}
                f.truncate()
        file_cache[username] = data
        return data

def write_user_profiles(username, profiles):
    if 'active' in profiles.keys() and 'profiles' in profiles.keys():
        file = get_user_file(username)
        with open(file, 'w+') as f:
            try:
                json.dump(profiles, f)
                f.truncate()
                clear_profile_cache() # TODO: Should cache be cleared or just updated?
                return True
            except Exception as e:
                print(e.message)
                return False
    else:
        return False

"""
Helper functions
"""
def get_profile_names(username):
    data = read_user_profiles(username)
    return [x['name'] for x in data['profiles']]

def get_profiles(username):
    data = read_user_profiles(username)
    return data['profiles']

def does_profile_exist(username, profile_name):
    return profile_name in get_profile_names(username)

"""
Active profile manipulation
"""
def set_active_profile(username, profile_name):
    profiles = get_profiles(username)
    if does_profile_exist(username, profile_name):
        return write_user_profiles(username, {'active': profile_name, 'profiles': profiles})
    else:
        return False

def get_active_profile(username):
    profiles = read_user_profiles(username)
    return profiles['active']

def get_on_login_profile(username, db_conn):
    active = get_active_profile(username)
    if active == '':
        return { 'devices': [], 'name': ''}
    else:
        return {
            'devices': get_profile_devices(username, active, db_conn),
            'name': active
        }

"""
Adding / removing profiles
"""
def add_profile(username, profile_name):
    profiles = read_user_profiles(username)
    if not does_profile_exist(username, profile_name):
        profiles['profiles'].append({'name': profile_name})
        return write_user_profiles(username, profiles)
    else:
        return False

def remove_profile(username, profile_name):
    profiles = read_user_profiles(username)
    if does_profile_exist(username, profile_name):
        if profiles['active'] == profile_name:
            profiles['active'] = ''
        profiles['profiles'][:] = [d for d in profiles['profiles'] if d.get('name') != profile_name]
        return write_user_profiles(username, profiles)
    else:
        return False


"""
Notification subscriptions
"""

def set_subscription_channels(username, profile_name, device_id, channels):
    if does_profile_exist(username, profile_name):
        profiles = get_profiles(username)
        for i in range(len(profiles)):
            if profiles[i]['name'] == profile_name:
                if 'devices' in profiles[i].keys():
                    for j in range(len(profiles[i]['devices'])):
                        if profiles[i]['devices'][j]['id'] == device_id:
                            profiles[i]['devices'][j]['subscriptions'] = channels
                            return write_user_profiles(username, {'active': get_active_profile(username), 'profiles': profiles})
    return False

def get_subscription_channels(username, profile_name, device_id):
    if does_profile_exist(username, profile_name):
        profiles = get_profiles(username)
        for i in range(len(profiles)):
            if profiles[i]['name'] == profile_name:
                if 'devices' in profiles[i].keys():
                    for j in range(len(profiles[i]['devices'])):
                        if profiles[i]['devices'][j]['id'] == device_id:
                            return profiles[i]['devices'][j]['subscriptions']
    return []

def get_set_subscription_channels(username, profile_name, device_id, fn):
    """
    Finds a list of subscription channels and passes it as an argument to function fn. After function fn is completed, saves
    changed channel list to user's save file
    :param username:
    :param profile_name:
    :param device_id:
    :param fn: Function to perform on a channel list. Should return edited list and accept one argument - current list of channels
    :return: True if edit was successful, False otherwise. May return false if write failed or if profile or device was not found.
    """
    if does_profile_exist(username, profile_name):
        profiles = get_profiles(username)
        for i in range(len(profiles)):
            if profiles[i]['name'] == profile_name:
                if 'devices' in profiles[i].keys():
                    for j in range(len(profiles[i]['devices'])):
                        if profiles[i]['devices'][j]['id'] == device_id:
                            profiles[i]['devices'][j]['subscriptions'] = fn(profiles[i]['devices'][j]['subscriptions'])
                            return write_user_profiles(username, {'active': get_active_profile(username), 'profiles': profiles})
    return False


def add_subscription_channel(username, profile_name, device_id, channel):
    def append_channel(subscriptions):
        subscriptions.append(channel)
        return subscriptions
    get_set_subscription_channels(username, profile_name, device_id, append_channel)

def remove_subscription_channel(username, profile_name, device_id, channel):
    def remove_channel(subscriptions):
        subscriptions.remove(channel)
        return subscriptions
    get_set_subscription_channels(username, profile_name, device_id, remove_channel)



"""
Profile devices
"""
def set_devices(username, profile_name, devices):
    pass

# Profiles are saved in JSON, contain IDs of devices.
# This function should load device IDs and then device info from DB.
def get_profile_devices(username, profile_name, db_conn):
    if profile_name == 'default':
        return [{
            'id': 1,
            'name': 'Test device',
            'hostname': 'localhost',
            'port': 830,
            'username': 'user',
            'subscriptions': ['channel 1', 'channel 2']
        },
        {
            'id': 2,
            'name': 'Basement router',
            'hostname': 'localhost',
            'port': 831,
            'username': 'admin',
        },
        {
            'id': 3,
            'name': 'Example server',
            'hostname': 'example.com',
            'port': 888,
            'username': 'admin',
            'subscriptions': ['channel 1']
        }]
    else:
        return []




def set_profile(username, profile_name, value):
    """
    Value format:
    [{'id': [device ID], 'subscriptions': [channel names]}, ...]
    """
    return True
