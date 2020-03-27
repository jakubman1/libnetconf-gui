import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Device} from "../../classes/Device";


@Component({
    selector: 'nc-profiles',
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
    activeProfile: string;
    devices: Device[] = [];
    loading = false;

    addNewProfileShown = false;

    ngOnInit() {
        this.loading = true;
        this.profileService.getAllProfileNames().subscribe(
            profiles => {
                this.profiles = profiles;
            }
        );
        this.profileService.getOnLoginProfile().subscribe(
            data => {
                this.selectedProfile = data.name;
                this.devices = data.devices;
                this.loading = false;
                this.activeProfile = data.name;
            }
        );
    }

    reloadDevices() {
        this.loading = true;
        this.profileService.getProfileDevices(this.selectedProfile).subscribe(
            data => {
                this.devices = data;
                this.loading = false;
            }
        );
    }

    setActiveProfile(profileName: string) {

        this.profileService.setActiveProfile(profileName).subscribe(
            _ => {
                this.activeProfile = profileName;
            },
            err => {
                console.error(err.message);
            }
        );
    }

    removeProfile() {
        this.profileService.removeProfile(this.selectedProfile).subscribe(
            _ => {
                this.profiles = this.profiles.filter(p => p !== this.selectedProfile);
                if(this.profiles.length !== 0) {
                    this.selectedProfile = this.profiles[0];
                    this.reloadDevices();
                }
            },
            err => {

            }
        );
    }

    addProfile(profileName: string) {
        this.profiles.push(profileName);
        this.addNewProfileShown = false;
        this.selectProfile(profileName);
    }


    selectProfile(profileName: string) {
        this.selectedProfile = profileName;
        this.reloadDevices();
    }

}
