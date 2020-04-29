// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {DeviceService, SessionService} from '../../../lib/netconf-lib';
import {Device} from '../../../lib/netconf-lib/lib/classes/device';

@Component({
    selector: 'nc-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

    constructor(
        private deviceService: DeviceService,
        private sessionService: SessionService
    ) { }

    connectedDevices: Device[] = [];

    ngOnInit() {
        this.connectedDevices = this.deviceService.connectedDevices;
        this.deviceService.connectedDevicesChanged.subscribe(_ => {
            this.connectedDevices = this.deviceService.connectedDevices;

        });
    }

}
