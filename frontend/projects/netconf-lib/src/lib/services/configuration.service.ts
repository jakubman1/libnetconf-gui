/**
 * Author: Jakub Man <xmanja00@stud.fit.vutbr.cz>
 * Service for configuration changes
 */
import {Injectable} from '@angular/core';
import {Device} from '../classes/device';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public editConfig(device: Device, target: string, config: object) {
    return;
  }

  public commitChanges(device: Device) {
    return;
  }

}
