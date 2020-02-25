import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../services/config.service";
import {ProfileService} from "../services/profile.service";
import {DeviceService} from "../services/device.service";
import {NotificationService} from "../services/notification.service";

@Component({
    selector: 'nc-base',
    templateUrl: './netconf.component.html',
    styleUrls: ['./netconf.component.scss']
})
export class NetconfComponent implements OnInit {

    constructor(
        private configService: ConfigService,
        private profileService: ProfileService,
        private deviceService: DeviceService,
        private notificationService: NotificationService
    ) {
    }

    statusMessage: string = "Loading...";
    config: object = {};

    ngOnInit() {
        this.statusMessage = "Loading config...";
        this.configService.getConfig().subscribe(
            config => {
                this.config = config;

                if (this.config['connectOnLogin'] === true) {
                    this.statusMessage = "Loading profile...";
                    this.loadProfile();
                } else {
                    this.statusMessage = "";
                }
            },
            err => {
                this.statusMessage = "";
            }
        );
    }

    loadProfile() {
        this.profileService.getOnLoginProfile().subscribe(
            devices => {
                this.statusMessage = "";
                this.deviceService.connectToMultipleDevices(devices);
                setTimeout(() => {
                    this.notificationService.sendNotification(
                        this.notificationService.createNotification("Notification 1", "Internal", "Channel 1")
                    );
                }, 250);
                setTimeout(() => {
                    this.notificationService.sendNotification(
                        this.notificationService.createNotification("Notification 2", "Internal", "Channel 1")
                    );
                }, 1500);
                setTimeout(() => {
                    this.notificationService.sendNotification(
                        this.notificationService.createNotification("Notification 3", "Internal", "Channel 1")
                    );
                }, 3000);
                setTimeout(() => {
                    this.notificationService.sendNotification(
                        this.notificationService.createNotification("Notification 4", "Internal", "Channel 1")
                    );
                }, 5000);


            },
            err => {
                this.statusMessage = "";
            }
        );
    }

}
