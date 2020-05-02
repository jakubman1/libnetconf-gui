import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericServerResponse} from '../classes/GenericServerResponse';
import {Session} from '../classes/session';
import {Device} from '../classes/device';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get sessions(): Session[] {
    console.log('Getting sessions');
    console.log(this._sessions);
    return this._sessions;
  }

  set sessions(value: Session[]) {
    console.log('Setting sessions');
    console.log(value);
    this._sessions = value;
    this.sessionsChanged.emit(value);
  }

  constructor(public http: HttpClient) {
    console.log('CONSTRUCTOR OF SESSION SERVICE CALLED');
  }

  private _sessions: Session[] = [];

  public sessionsChanged: EventEmitter<Session[]> = new EventEmitter<Session[]>();

  addSession(key: string, device: Device) {
    if (!this.doesSessionExists(key)) {
      const sessions = this.sessions;
      sessions.push({
        key, device
      });
      this.sessions = sessions;
    } else {
      const idx = this.findSessionIndex(key);
      this._sessions[idx].device = device;
      this.sessionsChanged.emit(this.sessions);
    }
  }


  destroySession(key: string) {
    const idx = this.findSessionIndex(key);
    return this.http.delete('/netconf/session/' + key)
      .pipe(
        tap(
          next => {
            this._sessions.splice(idx, 1);
            this.sessionsChanged.emit(this.sessions);
          }
        )
      );
  }

  loadOpenSessions(): Observable<Session[]> {
    return this.http.get<Session[]>('/netconf/sessions');
  }

  destroyAllSessions() {
    return this.http.delete('/netconf/sessions');
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
    for (const session of this._sessions) {
      if (session.key === key) {
        return true;
      }
    }
    return false;
  }

  findSessionIndex(key: string): number {
    return this._sessions.findIndex(s => s.key === key);
  }

  /**
   * Filter is xpath (?)
   */
  public getCompatibleDeviceSessions(filter: any): Session[] {
    // TODO: Filter
    console.log('Getting compatible sessions');
    console.log(this.sessions);
    return this.sessions;
  }

}
