import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from 'app/utils/auth.guard';
import { SafePipe, SafePipeModule } from 'app/utils/safe.pipe';
import { NetconfComponent } from './components/netconf.component';
import {DevicesComponent} from "./components/devices/devices.component";
import {ToolsComponent} from "./components/tools/tools.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {ProfilesComponent} from "./components/profiles/profiles.component";
import {AddDeviceFormComponent} from "./components/shared/add-device-form/add-device-form.component";
import {DeviceListComponent} from "./components/devices/device-list/device-list.component";

const routes: Routes = [{
    path: 'netconf',
    component: NetconfComponent,
    canActivate: [AuthGuard],
        data: {
            role: 10,
            name: 'NETCONF',
            description: 'Configure your network devices using the NETCONF protocol',
            icon: 'fa-server'
    },
    children: [
        {
            path: '',
            redirectTo: 'devices',
            pathMatch: 'full'
        },
        {
            path: 'devices',
            component: DevicesComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'tools',
            component: ToolsComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'profiles',
            component: ProfilesComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'notifications',
            component: NotificationsComponent,
            canActivate: [AuthGuard]
        }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SafePipeModule,
        RouterModule.forChild(routes),
        NgbModule,
    ],
    declarations: [
	    NetconfComponent,
        DevicesComponent,
        ToolsComponent,
        NotificationsComponent,
        ProfilesComponent,
        AddDeviceFormComponent,
        DeviceListComponent
    ],
    providers: [
        SafePipe
    ]
})
export class NetconfModule {}
