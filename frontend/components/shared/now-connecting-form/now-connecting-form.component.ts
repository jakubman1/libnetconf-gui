// @ts-ignore
import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {DeviceService, SessionService} from '../../../lib/netconf-lib';
// @ts-ignore
import {SocketService} from 'app/services/socket.service';
import {Session} from '../../../lib/netconf-lib/lib/classes/session';

enum ConnectionStatus {
    WAITING_FOR_CONNECTION = -2,
    CONNECTING,
    WAITING_FOR_DEVICE,
    CONNECTED,
    ERR_HTTP,
    ERR_PASSWORD_REQUIRED,
    ERR_HOSTCHECK_CONFIRMATION,
    ERR_SCHEMA_REQUIRED,
    ERR_SERVER
}


@Component({
    selector: 'nc-now-connecting',
    templateUrl: './now-connecting-form.component.html',
    styleUrls: ['./now-connecting-form.component.scss']
})
export class NowConnectingFormComponent implements OnInit {


    show = true;
    connecting = false;

    error = '';

    devices = [];
    schemasRequired = [];

    constructor(private profileService: ProfileService,
                private deviceService: DeviceService,
                private socketService: SocketService,
                private sessionService: SessionService) {
    }

    ngOnInit() {
        this.connecting = true;
        this.profileService.getOnLoginProfile().subscribe(
            res => {
                if (res.connectOnLogin) {
                    for (let dev of res.devices) {
                        this.devices.push({...dev, status: ConnectionStatus.WAITING_FOR_CONNECTION});
                    }
                    this.connectToAllWaiting();
                    this.socketService.subscribe('device_auth').subscribe((message: any) => {
                        this.handleAuthRequest();
                    });
                    this.socketService.subscribe('getschema').subscribe((message: any) => {
                        this.schemasRequired.push(message);
                    });
                } else {
                    this.close();
                }
            }
        );

    }

    connectToAllWaiting() {
        for (let dev of this.devices) {
            if (dev.status === ConnectionStatus.WAITING_FOR_CONNECTION) {
                this.connectToDevice(dev);
            }
        }
    }

    connectToDevice(device) {
        this.updateDeviceStatus(device, ConnectionStatus.CONNECTING);
        this.deviceService.connectToDevice(device).subscribe(
            request => {
                if (request['success']) {
                    this.sessionService.addSession(request['session-key'], device);
                    this.updateDeviceStatus(device, ConnectionStatus.WAITING_FOR_DEVICE);
                    this.checkSession(request['session-key'], device);
                } else {
                    if (request['message']) {
                        console.warn(request['message']);
                        this.updateDeviceStatus(device, request['message']);
                    } else {
                        this.updateDeviceStatus(device, ConnectionStatus.ERR_SERVER);
                    }

                }
                this.connecting = false;
            },
            err => {
                this.updateDeviceStatus(device, ConnectionStatus.ERR_HTTP);
                this.connecting = false;
            }
        );
    }

    checkSession(key, device) {
        this.sessionService.sessionAlive(key).subscribe(
            alive => {
                if (alive['success']) {
                    this.updateDeviceStatus(device, ConnectionStatus.CONNECTED);
                    if (this.shouldCloseSelf()) {
                        this.close();
                    }
                } else {
                    this.updateDeviceStatus(device, ConnectionStatus.ERR_SERVER);
                }
            },
            err => {
                this.updateDeviceStatus(device, ConnectionStatus.ERR_HTTP);
            }
        );
    }

    updateDeviceStatus(device, newStatus: ConnectionStatus | string) {
        const idx = this.devices.indexOf(device);
        if (idx >= 0) {
            this.devices[idx].status = newStatus;
        }
    }


    shouldCloseSelf() {
        for (let device of this.devices) {
            if (device.status !== ConnectionStatus.CONNECTED) {
                return false;
            }
        }
        return true;
    }

    close() {
        this.show = false;
    }

    handleAuthRequest() {
        alert("AUTH REQUIRED!");
    }

    uploadSchema(fileInput: FileList, schema: any) {
        if (fileInput && fileInput.item(0)) {
            let idx = this.schemasRequired.indexOf(schema);
            this.schemasRequired[idx]['status'] = 1;
            let reader = new FileReader();
            let file: File = fileInput[0];
            reader.onloadend = (e) => {
                this.socketService.send('getschema_result', {
                    'id': schema['id'],
                    'filename': fileInput[0]['name'],
                    'data': reader.result
                });
                this.schemasRequired[idx]['status'] = 2;
            }
            reader.readAsText(file);

        }
    }

    skipSchemaUpload() {
        for (let schema of this.schemasRequired) {
            console.log(schema['id']);
            this.socketService.send('getschema_result', {'id': schema['id'], 'filename': '', 'data': ''});
        }
        this.schemasRequired = [];
    }

}
