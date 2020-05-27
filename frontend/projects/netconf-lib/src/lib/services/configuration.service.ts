/**
 * Author: Jakub Man <xmanja00@stud.fit.vutbr.cz>
 * Service for configuration changes
 */
import {Injectable} from '@angular/core';
import {Device} from '../classes/device';
import {Session} from "../classes/session";
import {HttpClient} from "@angular/common/http";
import {GenericServerResponse} from "../classes/GenericServerResponse";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(public http: HttpClient) {
  }

  public commitChanges(session: Session) {
    return this.http.post<GenericServerResponse>('/netconf/session/commit', {'key': session.key, 'modifications': session.modifications});
  }

}
