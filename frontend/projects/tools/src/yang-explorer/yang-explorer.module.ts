import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YangExplorerComponent } from './yang-explorer.component';
// @ts-ignore
import {NetconfLibModule} from 'netconf-lib';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NetconfLibModule,
        NetconfLibModule,
    ],
  declarations: [YangExplorerComponent],
  entryComponents: [YangExplorerComponent]
})
export class YangExplorerModule {
  static entry = YangExplorerComponent;
}
