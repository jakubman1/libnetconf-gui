import {EventEmitter, Injectable} from '@angular/core';
import {Device} from '../classes/device';
import {Observable, of} from 'rxjs';
// import {SocketService} from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  get connectedDevices(): Device[] {
    return this._connectedDevices;
  }

  set connectedDevices(value: Device[]) {
    this._connectedDevices = value;
    this.connectedDevicesChanged.emit(value);
  }

  private _connectedDevices: Device[] = [
    {
      fingerprint: '',
      id: 1,
      name: 'Test device',
      hostname: 'localhost',
      port: 883,
      username: 'admin',
      password: '',
    },
    {
      fingerprint: '',
      id: 2,
      name: 'Test device 2',
      hostname: 'localhost',
      port: 883,
      username: 'user',
      password: '',
    },
    {
      fingerprint: '',
      id: 3,
      name: '',
      hostname: 'localhost',
      port: 888,
      username: 'user',
      password: '',
    }];

  public connectedDevicesChanged: EventEmitter<Device[]> = new EventEmitter<Device[]>();

  public getConnectedDevices(): Device[] {
    return this.connectedDevices;
  }

  public getSavedDevices(): Observable<Device[]> {
    return of(this.connectedDevices);
  }

  public saveDevice(hostname: string,
                    port: number,
                    username: string,
                    deviceName = '',
                    password = '',
                    connect = false) {
    const dev: Device = {
      fingerprint: '',
      id: -1,
      name: deviceName,
      hostname,
      port,
      username,
      password
    };

    if (connect) {
      this.connectToDevice(dev);
    }
  }

  public connectToDevice(device: Device) {
    this.connectedDevices.push(device);
  }

  /**
   * Filter is xpath (?)
   */
  public getCompatibleDevices(filter: any): Device[] {
    return this.connectedDevices;
  }

}
