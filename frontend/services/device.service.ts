import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Device} from "../classes/Device";


@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    constructor(
        private http: HttpClient
    )
    {}

    public connectedDevices: Observable<Device[]> = new Observable<Device[]>();

    connectToDevice(device: Device) {

    }

    connectToProfile(devices: Device[]) {

    }

}