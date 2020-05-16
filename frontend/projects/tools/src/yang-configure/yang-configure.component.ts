import {Component, OnInit} from '@angular/core';
import {SessionService} from 'netconf-lib';
import {Session} from 'netconf-lib/lib/classes/session';

@Component({
  selector: 'nct-yang-configure',
  templateUrl: './yang-configure.component.html',
  styleUrls: ['./yang-configure.component.scss']
})
export class YangConfigureComponent implements OnInit {
  constructor(
    private sessionService: SessionService
  ) {
  }

  sessions: Session[] = [];
  error = '';

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
              break;
            case 410:
              this.error = 'Connection failed: ' + response['message'];
              break;
            default:
              console.error('Invalid response code!');
              break;
          }
        }
      );
    }
  }
}
