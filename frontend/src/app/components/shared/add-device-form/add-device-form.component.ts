import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../netconf-lib';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'nc-add-device',
  templateUrl: './add-device-form.component.html',
  styleUrls: ['./add-device-form.component.scss']
})
export class AddDeviceFormComponent implements OnInit {

  deviceForm = new FormGroup({
    deviceName: new FormControl(''),
    hostname: new FormControl('localhost'),
    port: new FormControl(''),
    username: new FormControl('admin'),
    password: new FormControl(''),
    connectToDevice: new FormControl(true),
    saveDevice: new FormControl(true),
    addToActiveProfile: new FormControl(false)
  });
  error = '';

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.deviceForm.value);
    if(this.deviceForm.value.saveDevice) {
      this.deviceService.saveDevice(this.deviceForm.value.hostname,
          this.deviceForm.value.port,
          this.deviceForm.value.username,
          this.deviceForm.value.deviceName,
          this.deviceForm.value.password,
          this.deviceForm.value.saveDevice
      ).subscribe(
          id => {
            this.deviceForm.reset();
          },
          err => {
            this.error = err.message;
          }
      );
    }
  }

}
