import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NotificationService} from "../../../services/notification.service";
import {Notification} from "../../../classes/Notification";
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'nc-notification-info',
    templateUrl: './notification-info.component.html',
    styleUrls: ['./notification-info.component.scss'],
    animations: [
        trigger('changeDivSize', [
            state('initial', style({
                backgroundColor: 'green',
                width: '100%',
            })),
            state('final', style({
                backgroundColor: 'red',
                width: '0',
            })),
            transition('initial=>final', animate('10s')),
        ]),
    ]
})
export class NotificationInfoComponent implements OnInit {

    constructor(
        private notificationService: NotificationService
    ) {
    }

    @Input() notification: Notification;

    @Output() remove: EventEmitter<number> = new EventEmitter<number>();

    @Input() currentState: string;


    ngOnInit() {
    }

    removeSelf() {
        this.remove.emit(this.notification.id);
    }
}
