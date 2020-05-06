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

  ngOnInit(): void {
  }

  onDevicesSelected(sessions: Session[]) {
    this.sessions = sessions;
  }
}
