import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GenericServerResponse} from '../classes/GenericServerResponse';
import { Session } from '../classes/session';
import {Device} from '../classes/device';
import {DeviceService} from './device.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(public http: HttpClient, private deviceService: DeviceService) {
  }

  sessions: Session[] = [];

  addSession(key: string, device: Device) {
    if (!this.doesSessionExists(key)) {
      this.sessions.push({
        key, device
      });
    } else {
      const idx = this.findSessionIndex(key);
      this.sessions[idx].device = device;
    }
  }


  destroySession(key: string) {
    const idx = this.findSessionIndex(key);
    this.deviceService.disconnectDevice(this.sessions[idx].device).subscribe(
      _ => {
        this.sessions.splice(idx, 1);
      }
    );
  }

  /**
   *  Check if session exists on the server.
   */
  sessionAlive(key: string): Observable<GenericServerResponse> {
    /*const params = new HttpParams()
      .append('key', key);*/
    return this.http.get<GenericServerResponse>('/netconf/session/alive/' + key);
  }


  doesSessionExists(key: string): Boolean {
    for (const session of this.sessions) {
      if (session.key === key) {
        return true;
      }
    }
    return false;
  }

  findSessionIndex(key: string): number {
    return this.sessions.findIndex(s => s.key === key);
  }

}
