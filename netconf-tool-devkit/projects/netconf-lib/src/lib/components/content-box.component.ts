import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'lib-content-box',
  template: `
    <div class="box">
      <div class="box-header" *ngIf="title">{{title}}</div>
      <div class="box-content" [class.box-content-limited]="limitWidth">
          <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['../../../../shared-styles/netconf.scss']
})
export class ContentBoxComponent implements OnInit {

  @Input() title = '';
  @Input() limitWidth = false;

  constructor() {
  }

  ngOnInit() {

  }

}
