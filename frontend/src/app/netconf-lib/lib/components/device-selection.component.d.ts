import { OnInit, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../classes/session';
export declare class DeviceSelectionComponent implements OnInit {
    sessionService: SessionService;
    schemaFilter: string;
    devicesSelected: EventEmitter<Session[]>;
    compatibleDevices: {
        session: Session;
        selected: boolean;
    }[];
    errorMessage: string;
    constructor(sessionService: SessionService);
    ngOnInit(): void;
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     */
    areDevicesSelected(): boolean;
    setAllSelectionsTo(val: boolean): void;
    submit(): void;
    reload(): void;
}
