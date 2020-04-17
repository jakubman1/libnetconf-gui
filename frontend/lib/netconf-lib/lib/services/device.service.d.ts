import { EventEmitter } from '@angular/core';
import { Device } from '../classes/device';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class DeviceService {
    http: HttpClient;
    constructor(http: HttpClient);
    connectedDevices: Device[];
    private _connectedDevices;
    connectedDevicesChanged: EventEmitter<Device[]>;
    getConnectedDevices(): Device[];
    getSavedDevices(): Observable<Device[]>;
    saveDevice(hostname: string, port: number, username: string, deviceName?: string, password?: string, connect?: boolean): Observable<object>;
    connectToDevice(device: Device): Observable<Object>;
    /**
     * Filter is xpath (?)
     */
    getCompatibleDevices(filter: any): Device[];
}
