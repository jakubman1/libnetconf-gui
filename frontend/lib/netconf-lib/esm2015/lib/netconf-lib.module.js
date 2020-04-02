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
/** @type {?} */
const sharedComponents = [
    NetconfLibComponent,
    DeviceQuickswitchComponent,
    DeviceSelectionComponent,
    DeviceSelectionItemComponent,
    ContentBoxComponent,
    PopupComponent
];
export class NetconfLibModule {
}
NetconfLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, HttpClientModule],
                declarations: [...sharedComponents],
                exports: [...sharedComponents],
                providers: [
                    DeviceService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O01BR2xELGdCQUFnQixHQUFHO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztDQUNmO0FBVUQsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3ZELFlBQVksRUFBRSxDQUFFLEdBQUcsZ0JBQWdCLENBQUU7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFFLEdBQUcsZ0JBQWdCLENBQUU7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVCxhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZXRjb25mTGliQ29tcG9uZW50IH0gZnJvbSAnLi9uZXRjb25mLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VRdWlja3N3aXRjaENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldmljZS1xdWlja3N3aXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVNlbGVjdGlvbkl0ZW1Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zdWJjb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250ZW50Qm94Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7UG9wdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZGV2aWNlLnNlcnZpY2UnO1xuXG5cbmNvbnN0IHNoYXJlZENvbXBvbmVudHMgPSBbXG4gIE5ldGNvbmZMaWJDb21wb25lbnQsXG4gIERldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25Db21wb25lbnQsXG4gIERldmljZVNlbGVjdGlvbkl0ZW1Db21wb25lbnQsXG4gIENvbnRlbnRCb3hDb21wb25lbnQsXG4gIFBvcHVwQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uc2hhcmVkQ29tcG9uZW50cyBdLFxuICBleHBvcnRzOiBbIC4uLnNoYXJlZENvbXBvbmVudHMgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGV2aWNlU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ldGNvbmZMaWJNb2R1bGUgeyB9XG4iXX0=