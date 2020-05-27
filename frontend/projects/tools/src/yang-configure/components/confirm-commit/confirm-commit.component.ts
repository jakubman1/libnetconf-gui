/**
 * Author: Jakub Man <xmanja00@stud.fit.vutbr.cz>
 * Dialog to confirm or discard changes to the configuration
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Session} from 'netconf-lib/lib/classes/session';
import {ConfigurationService, SessionService} from "netconf-lib";

@Component({
  selector: 'nct-confirm-commit',
  templateUrl: './confirm-commit.component.html',
  styleUrls: ['./confirm-commit.component.scss']
})
export class ConfirmCommitComponent implements OnInit {

  @Input() session: Session
  @Output() shouldClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  error: string = '';

  constructor(private configurationService: ConfigurationService,
              public sessionService: SessionService) { }

  ngOnInit() {
  }

  commitChanges() {
    this.configurationService.commitChanges(this.session).subscribe(
      success => {
        if(!success.success) {
          this.error = success.message;
        }
        else {
          this.shouldClose.emit(true);
        }
      },
      err => {
        this.error = err.message;
      }
    );
  }

  discardChanges() {
    this.sessionService.discardModifications(this.session.key);
    this.shouldClose.emit(true);
  }

}
