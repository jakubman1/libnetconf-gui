import { Device } from '../classes/device';
import { SocketService } from './socket.service';
export declare class ConfigurationService {
    private socketService;
    constructor(socketService: SocketService);
    editConfig(device: Device, target: string, config: object): void;
    commitChanges(device: Device): void;
}
