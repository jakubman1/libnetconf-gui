import {Component, OnInit} from '@angular/core';
import {NetconfLibService, SessionService} from 'netconf-lib';
import {Device} from 'netconf-lib/lib/classes/device';
import {Session} from 'netconf-lib/lib/classes/session';

@Component({
  selector: 'app-example-tool',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  constructor(private libService: NetconfLibService, private sessionService: SessionService
  ) {
  }

  x = false;
  serviceText = 'Loading service...';
  sessions: Session[] = [];

  ngOnInit(): void {
    this.serviceText = this.libService.provideExample();
    console.log('FROM EXAMPLE COMPONENT');
    // console.log(this.sessionService.sessions);
  }

  onDevicesSelected(sessions: Session[]) {
    this.sessions = sessions;
  }
}
