import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import {Device} from "../../classes/Device";

@Component({
    selector: 'nc-devices',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

    constructor(
        private profileService: ProfileService
    ) {
    }

    profiles: string[];
    selectedProfile: string;
    devices: Device[] = [];

    ngOnInit() {
        this.profileService.getAllProfileNames().subscribe(
            profiles => {
                this.profiles = profiles;
            }
        );
        this.profileService.getOnLoginProfile().subscribe(
            data => {
                this.selectedProfile = data.name;
                this.devices = data.devices;
            }
        );
    }


    }
