from liberouterapi import db, auth, config, socketio
from liberouterapi.dbConnector import dbConnector

import json
from flask import request
import netconf2 as nc


def device_connect(address, port, username, password):

    if password:
        nc.SSH()
    else:
        nc.SSH()
    return