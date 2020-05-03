import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NetconfLibComponent } from './netconf-lib.component';
import {DeviceQuickswitchComponent} from './components/device-quickswitch.component';
import {DeviceSelectionComponent} from './components/device-selection.component';
import {DeviceSelectionItemComponent} from './components/subcomponents/device-selection-item.component';
import {ContentBoxComponent} from './components/content-box.component';
import {PopupComponent} from './components/popup.component';
import {HttpClientModule} from '@angular/common/http';
import {DeviceService} from './services/device.service';
import {SchemaListComponent} from './components/schema-list/schema-list.component';


const sharedComponents = [
  NetconfLibComponent,
  DeviceQuickswitchComponent,
  DeviceSelectionComponent,
  DeviceSelectionItemComponent,
  ContentBoxComponent,
  PopupComponent,
  SchemaListComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [ ...sharedComponents ],
  exports: [ ...sharedComponents ],
  providers: [
    DeviceService
  ]
})
export class NetconfLibModule { }
