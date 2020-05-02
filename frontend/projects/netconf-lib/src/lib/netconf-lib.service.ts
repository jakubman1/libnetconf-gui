import {Injectable} from '@angular/core';
import {Device} from './classes/device';
import {Session} from './classes/session';

export * from './services/configuration.service';
// export * from './services/device.service';
// export * from './services/session.service';


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
