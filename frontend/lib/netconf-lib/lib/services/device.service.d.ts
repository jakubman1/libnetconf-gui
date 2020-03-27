import { EventEmitter } from '@angular/core';
import { Device } from '../classes/device';
import { Observable } from 'rxjs';
export declare class DeviceService {
    connectedDevices: Device[];
    private _connectedDevices;
    connectedDevicesChanged: EventEmitter<Device[]>;
    getConnectedDevices(): Device[];
    getSavedDevices(): Observable<Device[]>;
    saveDevice(hostname: string, port: number, username: string, deviceName?: string, password?: string, connect?: boolean): void;
    connectToDevice(device: Device): void;
    /**
     * Filter is xpath (?)
     */
    getCompatibleDevices(filter: any): Device[];
}
