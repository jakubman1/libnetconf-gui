import { Component, OnInit } from '@angular/core';
import {Device} from "../../../classes/Device";
import {DeviceService} from '../../../lib/netconf-lib';

@Component({
    selector: 'nc-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

    constructor(
        private deviceService: DeviceService
    ) { }

    connectedDevices: Device[] = [];

    ngOnInit() {
        this.connectedDevices = this.deviceService.connectedDevices;
        this.deviceService.connectedDevicesChanged.subscribe(_ => {
            this.connectedDevices = this.deviceService.connectedDevices;

        });
    }

}
