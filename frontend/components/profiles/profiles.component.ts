import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";

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

    ngOnInit() {
        this.profileService.getAllProfileNames().subscribe(
            profiles => {
                this.profiles = profiles;
            }
        );
    }


    }
