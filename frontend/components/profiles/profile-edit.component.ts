import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../services/profile.service";
import {DeviceService} from "../../lib/netconf-lib";
import {Device} from "../../lib/netconf-lib/lib/classes/device";



@Component({
    selector: 'nc-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss']
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

    paginationOptions = {page: 1, perPage: 9};

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

    nextPage() {
        if((this.paginationOptions.page * this.paginationOptions.perPage) < this.savedDevices.length) {
            this.paginationOptions.page++;
        }

    }

    prevPage() {
        if(this.paginationOptions.page > 1) {
            this.paginationOptions.page--;
        }
    }

    setPage(page: number) {
        this.paginationOptions.page = page;
    }

}
