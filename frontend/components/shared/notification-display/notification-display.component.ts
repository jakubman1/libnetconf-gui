import {Component, OnInit} from '@angular/core';
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
    ) {
    }

    displayedNotifications: { notification: Notification, state: string }[] = [];
    toRemove: number[] = [];

    ngOnInit() {
        this.notificationService.onNewNotification.subscribe(
            notification => {
                this.addNotification(notification);
            }
        );
    }


    addNotification(notification: Notification) {
        this.displayedNotifications.push({notification, state: "initial"});
        if (this.displayedNotifications.length > 3) {
            this.toRemove.push(this.displayedNotifications[0].notification.id);
            this.displayedNotifications[0].state = "final"
        }
    }

    clearClicked() {
        this.displayedNotifications = [];
    }

    removeNotification(notificationId: number) {
        console.log(notificationId);
        if (this.toRemove.indexOf(notificationId) > -1) {
            this.displayedNotifications = this.displayedNotifications.filter(
                notification => notification.notification.id !== notificationId);
        }
    }

    cleanupNotifications() {

    }
}


