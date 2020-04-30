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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O01BR2xELGdCQUFnQixHQUFHO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztDQUNmO0FBY0QsTUFBTTs7O1lBWkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsQ0FBRSxHQUFHLGdCQUFnQixDQUFFO2dCQUNyQyxPQUFPLEVBQUUsQ0FBRSxHQUFHLGdCQUFnQixDQUFFO2dCQUNoQyxTQUFTLEVBQUU7b0JBQ1QsYUFBYTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmV0Y29uZkxpYkNvbXBvbmVudCB9IGZyb20gJy4vbmV0Y29uZi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlUXVpY2tzd2l0Y2hDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kZXZpY2UtcXVpY2tzd2l0Y2guY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VTZWxlY3Rpb25JdGVtQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc3ViY29tcG9uZW50cy9kZXZpY2Utc2VsZWN0aW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7Q29udGVudEJveENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge1BvcHVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZXZpY2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RldmljZS5zZXJ2aWNlJztcblxuXG5jb25zdCBzaGFyZWRDb21wb25lbnRzID0gW1xuICBOZXRjb25mTGliQ29tcG9uZW50LFxuICBEZXZpY2VRdWlja3N3aXRjaENvbXBvbmVudCxcbiAgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25JdGVtQ29tcG9uZW50LFxuICBDb250ZW50Qm94Q29tcG9uZW50LFxuICBQb3B1cENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uc2hhcmVkQ29tcG9uZW50cyBdLFxuICBleHBvcnRzOiBbIC4uLnNoYXJlZENvbXBvbmVudHMgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGV2aWNlU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ldGNvbmZMaWJNb2R1bGUgeyB9XG4iXX0=