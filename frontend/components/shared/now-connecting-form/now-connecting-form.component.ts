// @ts-ignore
import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {DeviceService} from '../../../lib/netconf-lib';
// @ts-ignore
import {SocketService} from 'app/services/socket.service';
import {GenericServerResponse} from '../../../classes/GenericServerResponse';


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
                private socketService: SocketService) {
    }

    ngOnInit() {
        this.connecting = true;
        this.profileService.getOnLoginProfile().subscribe(
            res => {
                for(let dev of res.devices) {
                    this.devices.push({...dev, status: ConnectionStatus.WAITING_FOR_CONNECTION});
                }
                this.connectToAllWaiting();
            }
        );
        this.socketService.subscribe('device_auth').subscribe((message: any) => {
            console.log("DEVICE AUTH CALLED")
            console.log(message);
            this.handleAuthRequest();
        });
        this.socketService.subscribe('getschema').subscribe((message: any) => {
            console.log("GETSCHEMA CALLED")
            console.log(message);
            this.schemasRequired.push(message);
        });
    }

    uploadSchema(fileInput: FileList, schema: any) {
        if (fileInput && fileInput.item(0)) {
            let idx = this.schemasRequired.indexOf(schema);
            this.schemasRequired[idx]['status'] = 1;
            let reader = new FileReader();
            let file: File = fileInput[0];
            reader.onloadend = (e) => {
                this.socketService.send('getschema_result', {'id': schema['id'], 'filename': fileInput[0]['name'], 'data': reader.result});
                this.schemasRequired[idx]['status'] = 2;
            }
            reader.readAsText(file);

        }
    }

    connectToAllWaiting() {
        let idx = 0;
        for (let dev of this.devices) {
            if (dev.status === ConnectionStatus.WAITING_FOR_CONNECTION) {
                this.devices[idx].status = ConnectionStatus.CONNECTING;
                this.deviceService.connectToDevice(dev).subscribe(
                    request => {
                        if(request['success']) {
                            this.setDeviceSessionKey(dev, request['session-key']);
                            this.updateDeviceStatus(dev, ConnectionStatus.CONNECTED);
                        }
                        else {

                            if(request['message']) {
                                console.warn(request['message']);
                                this.updateDeviceStatus(dev, request['message']);
                            }
                            else {
                                this.updateDeviceStatus(dev, ConnectionStatus.ERR_SERVER);
                            }

                        }
                        this.connecting = false;

                    },
                    err => {
                        this.updateDeviceStatus(dev, ConnectionStatus.ERR_HTTP);
                        this.connecting = false;
                    }
                );
            }
            idx++;
        }

    }

    updateDeviceStatus(device, newStatus: ConnectionStatus) {
        let idx = this.devices.indexOf(device);
        this.devices[idx].status = newStatus;
    }

    setDeviceSessionKey(device, sessionKey: string) {
        let idx = this.devices.indexOf(device);
        this.devices[idx].sessionKey = sessionKey;
    }

    close() {
        this.show = false;
    }

    handleAuthRequest() {
        alert("AUTH REQUIRED!");
    }

    skipSchemaUpload() {
        for(let schema of this.schemasRequired) {
            console.log(schema['id']);
            this.socketService.send('getschema_result', {'id': schema['id'], 'filename': '', 'data': ''});
        }
        this.schemasRequired = [];
    }

}
