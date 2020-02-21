import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from "../classes/Device";
import {ProfileService} from "./profile.service";


@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    public connectedDevicesChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    get connectedDevices(): { device: Device; status: string }[] {
        return this._connectedDevices;
    }

    set connectedDevices(value: { device: Device; status: string }[]) {
        this._connectedDevices = value;
        this.connectedDevicesChanged.emit(true);
    }
    private _connectedDevices: { device: Device, status: string }[] = [];

    constructor(
        private http: HttpClient
    ) {
    }



    connectToDevice(device: Device) {
        this.connectedDevices.push({device, status: "connected"});
    }

    connectToMultipleDevices(devices: Device[]) {
        for(let device of devices) {
            this.connectToDevice(device);
        }
    }

}