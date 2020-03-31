from liberouterapi import db, auth, config
from liberouterapi.dbConnector import dbConnector

# MongoDB data manipulation
import json
from flask import request

temp_profiles = ['myProfile1', 'myProfile2']


def get_profiles(username):
    return temp_profiles


def add_profile(username, profile_name):
    temp_profiles.append(profile_name)
    return True

def get_on_login_profile(username, db_conn):
    return {
        'devices': get_profile_devices(username, 'myProfile1', db_conn),
        'name': 'myProfile1'
    }

# Profiles are saved in JSON, contain IDs of devices.
# This function should load device IDs and then device info from DB.
def get_profile_devices(username, profile_name, db_conn):
    if profile_name == 'myProfile1':
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
    [{id: device ID, subscriptions: [channel names]}, ...]
    """
    return True
