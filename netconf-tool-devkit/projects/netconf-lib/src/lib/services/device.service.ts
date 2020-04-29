import {EventEmitter, Injectable} from '@angular/core';
import {Device} from '../classes/device';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GenericServerResponse} from '../classes/GenericServerResponse';
import {Session} from '../classes/session';

@Injectable()
export class DeviceService {
  constructor(public http: HttpClient) {
  }

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
      this.connectToDevice(dev).subscribe();
    }
    return this.http.post<object>('/netconf/device', {device: dev});
  }

  public connectToDevice(device: Device) {
    // this.connectedDevices.push(device);
    const body = {
      'name': device.name,
      'hostname': device.hostname,
      'port': device.port,
      'username': device.username,
      'password': device.password
    };
    return this.http.post('/netconf/connect', body);
  }

  /**
   * Filter is xpath (?)
   */
  public getCompatibleDevices(filter: any): Device[] {
    return this.connectedDevices;
  }

  disconnectDevice(device: Device) {
    return of(null);
  }

}
