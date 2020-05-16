import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericServerResponse } from '../classes/GenericServerResponse';
import { Session } from '../classes/session';
import { Device } from '../classes/device';
import { Observable } from 'rxjs';
export declare class SessionService {
    http: HttpClient;
    sessions: Session[];
    constructor(http: HttpClient);
    private _sessions;
    sessionsChanged: EventEmitter<Session[]>;
    addSession(key: string, device: Device): void;
    destroySession(key: string): Observable<Object>;
    loadOpenSessions(): Observable<Session[]>;
    destroyAllSessions(): Observable<Object>;
    /**
     *  Check if session exists on the server.
     */
    sessionAlive(key: string): Observable<GenericServerResponse>;
    doesSessionExists(key: string): Boolean;
    findSessionIndex(key: string): number;
    /**
     * Path is xpath.
     * For more information see https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     */
    getCompatibleDeviceSessions(path: any): Observable<Session[]>;
    /**
     * Format of path is described in detail here: https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * When no path is provided, the whole tree is requested
     */
    rpcGet(sessionKey: string, recursive: boolean, path?: string): Observable<Object>;
}
