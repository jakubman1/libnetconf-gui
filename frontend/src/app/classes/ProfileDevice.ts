export class ProfileDevice {
    id: string;
    name?: string;
    hostname: string;
    port: number;
    username: string;
    password?: string;
    subscriptions?: string[];
    fingerprint?: string;
}
