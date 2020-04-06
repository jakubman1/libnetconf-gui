# from liberouterapi import db, auth, config, socketio

import json
from flask import request
import netconf2 as nc


def get_saved_devices(username, db_conn):
    return [{
        'id': 1,
        'name': 'Test device',
        'hostname': 'localhost',
        'port': 830,
        'username': 'user',
        'fingerprint': 'e8fe15b374207a2e6ee99bbbadc87ecd068c17f8'
    },
    {
        'id': 2,
        'name': 'Basement router',
        'hostname': 'localhost',
        'port': 831,
        'username': 'admin',
        'fingerprint': 'e8fe15b374207a2e6ee99bbbadc87ecd068c17f8'
    },
    {
        'id': 3,
        'name': 'Example server',
        'hostname': 'example.com',
        'port': 888,
        'username': 'admin',
        'fingerprint': 'e8fe15b374207a2e6ee99bbbadc87ecd068c17f8'
    },
    {
        'id': 4,
        'name': 'Main router',
        'hostname': 'localhost',
        'port': 832,
        'username': 'admin',
        'fingerprint': 'e8fe15b374207a2e6ee99bbbadc87ecd068c17f8'
    },
    {
        'id': 5,
        'name': 'Build server',
        'hostname': '192.168.0.5',
        'port': 888,
        'username': 'admin',
        'fingerprint': 'e8fe15b374207a2e6ee99bbbadc87ecd068c17f8'
    }]


def add_device():
    pass
