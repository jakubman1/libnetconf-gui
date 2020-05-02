import { OnInit, EventEmitter } from '@angular/core';
import { Device } from '../../classes/device';
export declare class DeviceSelectionItemComponent implements OnInit {
    device: Device;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    compatibleDevices: Device[];
    constructor();
    ngOnInit(): void;
    changeSelection(): void;
}
