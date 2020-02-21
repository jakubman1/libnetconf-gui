import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../../services/notification.service";
import {Notification} from "../../../classes/Notification";

@Component({
    selector: 'nc-notification-display',
    templateUrl: './notification-display.component.html',
    styleUrls: ['./notification-display.component.scss']
})
export class NotificationDisplayComponent implements OnInit {

    constructor(
        private notificationService: NotificationService
    ) { }

    displayedNotifications: Notification[] = [];

    ngOnInit() {
        this.notificationService.onNewNotification.subscribe(
            notification => {
                this.addNotification(notification);
                console.log(this.displayedNotifications);
            }
        );
    }

    addNotification(notification: Notification) {
        this.displayedNotifications.push(notification);
    }

}
