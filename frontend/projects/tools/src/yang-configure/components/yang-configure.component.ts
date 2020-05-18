import {Component, OnInit} from '@angular/core';
import {SessionService} from 'netconf-lib';
import {Session} from 'netconf-lib/lib/classes/session';
import {NodeControlService} from "../services/node-control.service";

@Component({
  selector: 'nct-yang-configure',
  templateUrl: './yang-configure.component.html',
  styleUrls: ['./yang-configure.component.scss']
})
export class YangConfigureComponent implements OnInit {
  constructor(
    private sessionService: SessionService,
    public nodeControlService: NodeControlService
  ) {
  }

  sessions: Session[] = [];
  error = '';
  helpShown = false;

  node_tmp = [];

  ngOnInit(): void {
  }

  onDevicesSelected(sessions: Session[]) {
    this.sessions = sessions;
    for (const session of this.sessions) {
      this.sessionService.rpcGet(session.key, true).subscribe(
        response => {
          switch (response['code']) {
            case 200:
              console.log(response['data']);
              this.error = '';
              this.node_tmp = response['data'];
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
        }
      );
    }
  }

  toggleHelp() {
    if(this.helpShown) {
      this.nodeControlService.hideHelpOnAll();
    } else {
      this.nodeControlService.showHelpOnAll();
    }
    this.helpShown = !this.helpShown;
  }
}
