import { OnInit, EventEmitter } from '@angular/core';
import { Device } from '../classes/device';
import { DeviceService } from '../netconf-lib.service';
export declare class DeviceSelectionComponent implements OnInit {
    private deviceService;
    schemaFilter: string;
    devicesSelected: EventEmitter<Device[]>;
    compatibleDevices: {
        device: Device;
        selected: boolean;
    }[];
    errorMessage: string;
    constructor(deviceService: DeviceService);
    ngOnInit(): void;
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     */
    areDevicesSelected(): boolean;
    setAllSelectionsTo(val: boolean): void;
    submit(): void;
}
