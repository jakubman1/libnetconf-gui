import { Device } from '../classes/device';
export declare class ConfigurationService {
    editConfig(device: Device, target: string, config: object): void;
    commitChanges(device: Device): void;
}
