import {Injectable} from '@angular/core';
import {Device} from './classes/device';

export * from './services/configuration.service';
export * from './services/device.service';
export * from './services/socket.service';


@Injectable({
  providedIn: 'root'
})
export class NetconfLibService {

  constructor() {
  }

  public provideExample(): string {
    return 'Example service works!';
  }


}
