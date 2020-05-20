import {Device} from './device';

export class Session {
  public key: string;
  public device: Device;
  public data?: object[];
}
