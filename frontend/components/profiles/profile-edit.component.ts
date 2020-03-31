import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../services/profile.service";
import {DeviceService} from "../../lib/netconf-lib";
import {ProfileDevice} from "../../classes/ProfileDevice";



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
    savedDevices: {device: ProfileDevice, inProfile: boolean, subscriptions?: string[]}[] = [];
    searchedText: string = '';

    paginationOptions = {page: 1, perPage: 9};

    loading = false;

    ngOnInit() {
        this.loading = true;
        this.route.paramMap.subscribe(
            params => {
                this.selectedProfile = params.get("profile");
                if(this.selectedProfile) {
                    this.loadProfile(this.selectedProfile)
                }
            });
        this.deviceService.getSavedDevices().subscribe(
            devices => {
                this.profileService.getProfileDevices(this.selectedProfile).subscribe(
                    profileDevices => {
                        console.log(profileDevices);
                        for(let device of devices) {
                            let inProfile = false;
                            let subscriptions = [];
                            for(let profileDevice of profileDevices) {
                                if(profileDevice.id === device.id) {
                                    inProfile = true;
                                    subscriptions = profileDevice.subscriptions;
                                    break;
                                }
                            }
                            this.savedDevices.push({device, inProfile, subscriptions});
                        }
                        this.loading = false;
                    }
                );
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
