import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
// @ts-ignore
import {NetconfLibModule} from 'netconf-lib';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NetconfLibModule
  ],
  declarations: [ExampleComponent],
  entryComponents: [ExampleComponent]
})
export class ExampleModule {
  static entry = ExampleComponent;
}
