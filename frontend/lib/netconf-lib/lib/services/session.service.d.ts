import { HttpClient } from '@angular/common/http';
import { GenericServerResponse } from '../classes/GenericServerResponse';
import { Session } from '../classes/session';
import { Device } from '../classes/device';
import { DeviceService } from './device.service';
import { Observable } from 'rxjs';
export declare class SessionService {
    http: HttpClient;
    private deviceService;
    constructor(http: HttpClient, deviceService: DeviceService);
    sessions: Session[];
    addSession(key: string, device: Device): void;
    destroySession(key: string): void;
    /**
     *  Check if session exists.
     */
    sessionAlive(key: string): Observable<GenericServerResponse>;
    doesSessionExists(key: string): Boolean;
    findSessionIndex(key: string): number;
}
