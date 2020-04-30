// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../lib/netconf-lib';
import {Device} from '../../../lib/netconf-lib/lib/classes/device';
import {Session} from '../../../lib/netconf-lib/lib/classes/session';

@Component({
    selector: 'nc-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

    constructor(
        private sessionService: SessionService
    ) { }

    sessions: Session[] = [];

    ngOnInit() {
        this.sessions = this.sessionService.sessions;
        this.sessionService.sessionsChanged.subscribe(
            sessions => {
                this.sessions = sessions;
            }
        )
    }

    disconnect(sessionKey: string) {
        this.sessionService.destroySession(sessionKey).subscribe();
    }

}
