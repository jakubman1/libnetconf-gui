import {Component, OnInit} from '@angular/core';
import {DeviceService, SessionService} from 'netconf-lib';
import {Session} from 'netconf-lib/lib/classes/session';
import {NodeControlService} from "../services/node-control.service";
import {Device} from "netconf-lib/lib/classes/device";

@Component({
  selector: 'nct-yang-configure',
  templateUrl: './yang-configure.component.html',
  styleUrls: ['./yang-configure.component.scss']
})
export class YangConfigureComponent implements OnInit {
  constructor(
    private sessionService: SessionService,
    public nodeControlService: NodeControlService,
    private deviceService: DeviceService
  ) {
  }

  sessions: Session[] = [];
  error = '';
  helpShown = false;

  selected_data = [];
  loading = false;

  ngOnInit(): void {
  }

  changeSelectedSession(session: Session) {
    this.loadSessionRpc(session, false);
  }

  onDevicesSelected(sessions: Session[]) {
    this.sessions = sessions;
    /* for (const session of this.sessions) {
    } */
  }

  loadSessionRpc(session: Session, forceReload: boolean = false) {
    const idx = this.sessions.indexOf(session);
    if (forceReload || !this.sessions[idx].data) {
      this.loading = true;
      this.sessionService.rpcGet(session.key, true).subscribe(
        response => {
          switch (response['code']) {
            case 200:
              console.log(response['data']);
              this.error = '';
              this.selected_data = response['data'];
              this.sessions[idx].data = response['data'];
              break;
            case 410:
              this.error = 'Connection failed: ' + response['message'];
              break;
            case 418:
              this.error = 'NETCONF error: ' + response['message'];
              break;
            default:
              console.error('Invalid response code!');
              break;
          }
          this.loading = false;
        },
        err => {
          this.error = 'HTTP error: ' + err.message;
          this.loading = false;
        }
      );
    } else {
      this.selected_data = this.sessions[idx].data;
    }
  }

  toggleHelp() {
    if (this.helpShown) {
      this.nodeControlService.hideHelpOnAll();
    } else {
      this.nodeControlService.showHelpOnAll();
    }
    this.helpShown = !this.helpShown;
  }

  reconnectDevice(device: Device) {
    this.deviceService.connectToDevice(device).subscribe();
  }
}
