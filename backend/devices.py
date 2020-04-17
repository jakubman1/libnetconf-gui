# from liberouterapi import socketio

import json
from flask import request
from bson.objectid import ObjectId
# import netconf2 as nc


def get_saved_devices(username, db_coll):
    list = []
    for item in db_coll.find({'owner': username}):
        item['_id'] = str(item['_id'])
        item['id'] = str(item['_id'])
        list.append(item)
    return list

def add_device(username, device, db_coll):
    device['owner'] = username
    if all (k in device for k in ('hostname', 'port', 'username')):
        return str(db_coll.insert_one(device).inserted_id)
    return False

def get_device_by_id(device_id: str, db_coll):
    device = db_coll.find_one({'_id': ObjectId(device_id)})
    device['_id'] = str(device['_id'])
    device['id'] = str(device['_id'])
    return device

