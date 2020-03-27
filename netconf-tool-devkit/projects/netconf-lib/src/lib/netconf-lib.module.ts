import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NetconfLibComponent } from './netconf-lib.component';
import {DeviceQuickswitchComponent} from './components/device-quickswitch.component';
import {DeviceSelectionComponent} from './components/device-selection.component';
import {DeviceSelectionItemComponent} from './components/subcomponents/device-selection-item.component';
import {ContentBoxComponent} from './components/content-box.component';
import {PopupComponent} from "./components/popup.component";


const sharedComponents = [
  NetconfLibComponent,
  DeviceQuickswitchComponent,
  DeviceSelectionComponent,
  DeviceSelectionItemComponent,
  ContentBoxComponent,
  PopupComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ ...sharedComponents ],
  exports: [ ...sharedComponents ],
})
export class NetconfLibModule { }
