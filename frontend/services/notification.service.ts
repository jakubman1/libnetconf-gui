import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Notification} from "../classes/Notification";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    public onNewNotification: EventEmitter<Notification> = new EventEmitter<Notification>();

    constructor() {
    }

    public sendNotification(notification: Notification) {
        this.onNewNotification.emit(notification);
    }

    public static getCurrentTime(): string {
        let now = new Date();
        return now.getHours + ":" + now.getMinutes() + ":" + now.getSeconds();
    }
}