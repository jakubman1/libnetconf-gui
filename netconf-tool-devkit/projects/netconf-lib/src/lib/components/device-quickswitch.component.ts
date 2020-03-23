import { Component, OnInit, Input } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Device} from '../classes/device';

@Component({
  selector: 'lib-device-quickswitch',
  template: `
    <p>
      tbd
    </p>
  `,
  styles: []
})
export class DeviceQuickswitchComponent implements OnInit {

  @Input() schemaFilter = '';
  @Input() vertical = false;
  compatibleDevices: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {

  }

}
