import {Device} from "./Device";

export class Profile {
    name: string;
    devices: {Device: Device, notificationChannels?: string[]}[];
}
