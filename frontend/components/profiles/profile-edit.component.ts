// @ts-ignore
import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../services/profile.service";
import {DeviceService} from "../../lib/netconf-lib";
import {ProfileDevice} from "../../classes/ProfileDevice";
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
    allDevices: Device[];
    savedDevices: {device: ProfileDevice, inProfile: boolean, subscriptions?: string[]}[] = [];
    searchedText: string = '';

    paginationOptions = {page: 1, perPage: 9};

    loading = false;

    ngOnInit() {
        this.loading = true;
        this.initDevices();
    }

    initDevices() {
        this.deviceService.getSavedDevices().subscribe(
            devices => {
                this.allDevices = devices;
                //this.loadProfile(this.selectedProfile)
                this.route.paramMap.subscribe(
                    params => {
                        this.selectedProfile = params.get("profile");
                        if(this.selectedProfile) {
                            this.loadProfile(this.selectedProfile)
                        }
                    });
            }
        );
    }



    loadProfile(profileName: string) {
        this.loading = true;
        this.profileService.getProfileDevices(this.selectedProfile).subscribe(
            profileDevices => {
                console.log(profileDevices);
                for(let device of this.allDevices) {
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
