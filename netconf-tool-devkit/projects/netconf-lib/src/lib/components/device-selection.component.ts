import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Device} from '../classes/device';
import {DeviceService} from '../netconf-lib.service';

@Component({
  selector: 'lib-device-selection',
  templateUrl: './device-selection.component.html',
  styleUrls: ['./device-selection.component.scss']
})
export class DeviceSelectionComponent implements OnInit {

  @Input() schemaFilter = '';
  @Output() devicesSelected: EventEmitter<Device[]> = new EventEmitter<Device[]>();
  compatibleDevices: {device: Device, selected: boolean}[] = [];

  errorMessage = '';

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    const devices = this.deviceService.getCompatibleDevices(this.schemaFilter);
    for (const d of devices) {
      this.compatibleDevices.push({device: d, selected: true});
    }
  }

  /**
   * Returns true, if there is at least one device selected. Returns false otherwise.
   */
  areDevicesSelected(): boolean {
    for (const d of this.compatibleDevices) {
      if (d.selected) {
        return true;
      }
    }
    return false;
  }

  setAllSelectionsTo(val: boolean) {
    for (const d of this.compatibleDevices) {
      d.selected = val;
    }
  }

  submit() {
    if (this.areDevicesSelected()) {
      const selectedDevices: Device[] = [];
      for (const d of this.compatibleDevices) {
        if (d.selected) {
          selectedDevices.push(d.device);
        }
      }
      console.log(selectedDevices);
      this.devicesSelected.emit(selectedDevices);
      this.errorMessage = '';
    } else {
      console.log('nothing selected');
      this.errorMessage = 'No devices selected';
    }
  }

}
