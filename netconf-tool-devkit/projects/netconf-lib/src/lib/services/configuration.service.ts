import {Injectable} from '@angular/core';
import {Device} from '../classes/device';
import {SocketService} from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private socketService: SocketService) {
  }

  public editConfig(device: Device, target: string, config: object) {
    return;
  }

  public commitChanges(device: Device) {
    return;
  }

}
