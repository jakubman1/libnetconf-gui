import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../services/profile.service";
import {DeviceService} from "../../lib/netconf-lib";
import {Device} from "../../lib/netconf-lib/lib/classes/device";



@Component({
    selector: 'nc-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profiles.component.scss']
})
export class ProfileEditComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private deviceService: DeviceService
    ) {
    }

    selectedProfile: string;
    savedDevices: {device: Device, inProfile: boolean}[] = [];
    searchedText: string = '';

    loading = false;

    ngOnInit() {
        this.route.paramMap.subscribe(
            params => {
                this.selectedProfile = params.get("profile");
                if(this.selectedProfile) {
                    this.loadProfile(this.selectedProfile)
                }
            });
        this.deviceService.getSavedDevices().subscribe(
            devices => {
                for(let device of devices)
                this.savedDevices.push({device, inProfile: false});
            }
        );
    }

    loadProfile(profileName: string) {
        this.profileService.getProfileDevices(profileName)
    }

}
