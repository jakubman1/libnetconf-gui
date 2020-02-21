import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../../services/device.service";
import {Device} from "../../../classes/Device";

@Component({
    selector: 'nc-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

    constructor(
        private deviceService: DeviceService
    ) { }

    connectedDevices: {device: Device, status: string}[] = [];

    ngOnInit() {
        this.connectedDevices = this.deviceService.connectedDevices;
        this.deviceService.connectedDevicesChanged.subscribe(_ => {
            this.connectedDevices = this.deviceService.connectedDevices;

        });
    }

}
