import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from 'app/utils/auth.guard';
import { SafePipe, SafePipeModule } from 'app/utils/safe.pipe';
import { NetconfComponent } from './components/netconf.component';
import {DevicesComponent} from "./components/devices/devices.component";
import {ToolsComponent} from "./components/tools/tools.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {ProfilesComponent} from "./components/profiles/profiles.component";
import {AddDeviceFormComponent} from "./components/shared/add-device-form/add-device-form.component";
import {DeviceListComponent} from "./components/devices/device-list/device-list.component";
import {NotificationDisplayComponent} from "./components/shared/notification-display/notification-display.component";
import {NotificationInfoComponent} from "./components/shared/notification-info/notification-info.component";
import {ToolLoaderService} from "./services/tool-loader/tool-loader.service";
import {ClientToolLoaderService} from "./services/tool-loader/client-tool-loader.service";
import {ToolConfigProvider} from "./services/tool-config.provider";

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
            path: 'tool/:tool',
            component: ToolsComponent,
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
        BrowserAnimationsModule
    ],
    declarations: [
	    NetconfComponent,
        DevicesComponent,
        ToolsComponent,
        NotificationsComponent,
        ProfilesComponent,
        AddDeviceFormComponent,
        DeviceListComponent,
        NotificationDisplayComponent,
        NotificationInfoComponent
    ],
    providers: [
        SafePipe,
        { provide: ToolLoaderService, useClass: ClientToolLoaderService },
        ToolConfigProvider,
        {
            provide: APP_INITIALIZER,
            useFactory: (provider: ToolConfigProvider) => () =>
                provider
                    .loadConfig()
                    .toPromise()
                    .then(config => (provider.config = config)),
            multi: true,
            deps: [ToolConfigProvider]
        }
    ]
})
export class NetconfModule {}
