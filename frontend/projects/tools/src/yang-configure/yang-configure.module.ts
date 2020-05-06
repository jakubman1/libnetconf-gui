import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YangConfigureComponent } from './yang-configure.component';
// @ts-ignore
import {NetconfLibModule} from 'netconf-lib';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NetconfLibModule
  ],
  declarations: [YangConfigureComponent],
  entryComponents: [YangConfigureComponent]
})
export class YangConfigureModule {
  static entry = YangConfigureComponent;
}
