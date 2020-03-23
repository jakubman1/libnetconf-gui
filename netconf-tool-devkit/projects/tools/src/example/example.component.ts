import {Component, OnInit} from '@angular/core';
import {NetconfLibService} from 'netconf-lib';
import {Device} from 'netconf-lib/lib/classes/device';

@Component({
  selector: 'app-example-tool',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  constructor(private libService: NetconfLibService) {
  }

  x = false;
  serviceText = 'Loading service...';
  devices: Device[] = [];

  ngOnInit(): void {
    this.serviceText = this.libService.provideExample();
  }

  onDevicesSelected(devices: Device[]) {
    this.devices = devices;
  }
}
