/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NetconfLibComponent } from './netconf-lib.component';
import { DeviceQuickswitchComponent } from './components/device-quickswitch.component';
import { DeviceSelectionComponent } from './components/device-selection.component';
import { DeviceSelectionItemComponent } from './components/subcomponents/device-selection-item.component';
import { ContentBoxComponent } from './components/content-box.component';
import { PopupComponent } from './components/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceService } from './services/device.service';
import { SchemaListComponent } from './components/schema-list/schema-list.component';
/** @type {?} */
const sharedComponents = [
    NetconfLibComponent,
    DeviceQuickswitchComponent,
    DeviceSelectionComponent,
    DeviceSelectionItemComponent,
    ContentBoxComponent,
    PopupComponent,
    SchemaListComponent
];
export class NetconfLibModule {
}
NetconfLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    HttpClientModule
                ],
                declarations: [...sharedComponents],
                exports: [...sharedComponents],
                providers: [
                    DeviceService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7O01BRzdFLGdCQUFnQixHQUFHO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtDQUNwQjtBQWNELE1BQU07OztZQVpMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLENBQUUsR0FBRyxnQkFBZ0IsQ0FBRTtnQkFDckMsT0FBTyxFQUFFLENBQUUsR0FBRyxnQkFBZ0IsQ0FBRTtnQkFDaEMsU0FBUyxFQUFFO29CQUNULGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5ldGNvbmZMaWJDb21wb25lbnQgfSBmcm9tICcuL25ldGNvbmYtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlU2VsZWN0aW9uSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3N1YmNvbXBvbmVudHMvZGV2aWNlLXNlbGVjdGlvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRlbnRCb3hDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3B1cENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3BvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7RGV2aWNlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQge1NjaGVtYUxpc3RDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHNoYXJlZENvbXBvbmVudHMgPSBbXG4gIE5ldGNvbmZMaWJDb21wb25lbnQsXG4gIERldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25Db21wb25lbnQsXG4gIERldmljZVNlbGVjdGlvbkl0ZW1Db21wb25lbnQsXG4gIENvbnRlbnRCb3hDb21wb25lbnQsXG4gIFBvcHVwQ29tcG9uZW50LFxuICBTY2hlbWFMaXN0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAuLi5zaGFyZWRDb21wb25lbnRzIF0sXG4gIGV4cG9ydHM6IFsgLi4uc2hhcmVkQ29tcG9uZW50cyBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEZXZpY2VTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmV0Y29uZkxpYk1vZHVsZSB7IH1cbiJdfQ==