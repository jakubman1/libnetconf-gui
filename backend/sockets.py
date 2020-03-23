from liberouterapi import socketio

sio_data = {}

def sio_send(data):
    try:
        e = sio_data[data['id']]
        e.send(data)
    except KeyError:
        pass

def socket_emit(name, params):
    socketio.emit(name, params, callback = sio_send)
