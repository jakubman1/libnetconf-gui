/**
 * Author: Jakub Man <xmanja00@stud.fit.vutbr.cz>
 * YANG Configure tool serve to view and edit device's configuration
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YangConfigureComponent } from './components/yang-configure.component';
// @ts-ignore
import {NetconfLibModule} from 'netconf-lib';
import {HttpClientModule} from '@angular/common/http';
import { YangSchemaNodeComponent } from './components/yang-schema-node/yang-schema-node.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NetconfLibModule,
    RouterModule,
    FormsModule
  ],
  declarations: [YangConfigureComponent, YangSchemaNodeComponent],
  entryComponents: [YangConfigureComponent]
})
export class YangConfigureModule {
  static entry = YangConfigureComponent;
}
