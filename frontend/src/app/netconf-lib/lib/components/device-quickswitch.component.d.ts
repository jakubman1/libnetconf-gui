import { OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../classes/device';
export declare class DeviceQuickswitchComponent implements OnInit {
    private deviceService;
    schemaFilter: string;
    vertical: boolean;
    compatibleDevices: Device[];
    constructor(deviceService: DeviceService);
    ngOnInit(): void;
}
