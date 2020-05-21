import {Device} from "./device";
import {ConnectionStatus} from "./ConnectionStatus";

export class DeviceWithStatus {
  device: Device;
  status: ConnectionStatus | string;
  hostcheckMessageId?: string;
  hostcheckMessage?: string;
}
