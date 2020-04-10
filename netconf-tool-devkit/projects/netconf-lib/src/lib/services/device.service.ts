import {EventEmitter, Injectable} from '@angular/core';
import {Device} from '../classes/device';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import {SocketService} from './socket.service';

@Injectable()
export class DeviceService {
  constructor(public http: HttpClient) {}

  get connectedDevices(): Device[] {
    return this._connectedDevices;
  }

  set connectedDevices(value: Device[]) {
    this._connectedDevices = value;
    this.connectedDevicesChanged.emit(value);
  }

  private _connectedDevices: Device[] = [];

  public connectedDevicesChanged: EventEmitter<Device[]> = new EventEmitter<Device[]>();

  public getConnectedDevices(): Device[] {
    return this.connectedDevices;
  }

  public getSavedDevices(): Observable<Device[]> {
    return this.http.get<Device[]>('/netconf/devices');
  }


  public saveDevice(hostname: string,
                    port: number,
                    username: string,
                    deviceName = '',
                    password = '',
                    connect = false): Observable<object> {
    const dev: Device = {
      fingerprint: '',
      id: '',
      name: deviceName,
      hostname,
      port,
      username,
      password
    };

    if (connect) {
      this.connectToDevice(dev);
    }
    return this.http.post<object>('/netconf/device', {device: dev});
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
