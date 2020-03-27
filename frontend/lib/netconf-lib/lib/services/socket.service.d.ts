import { Observable } from 'rxjs';
export declare class SocketService {
    private socket;
    constructor();
    send(event: string, message?: any): void;
    subscribe(event: string): Observable<any>;
    unsubscribe(event: string): void;
}
