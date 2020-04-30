/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var sharedComponents = [
    NetconfLibComponent,
    DeviceQuickswitchComponent,
    DeviceSelectionComponent,
    DeviceSelectionItemComponent,
    ContentBoxComponent,
    PopupComponent
];
var NetconfLibModule = /** @class */ (function () {
    function NetconfLibModule() {
    }
    NetconfLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        HttpClientModule
                    ],
                    declarations: tslib_1.__spread(sharedComponents),
                    exports: tslib_1.__spread(sharedComponents),
                    providers: [
                        DeviceService
                    ]
                },] }
    ];
    return NetconfLibModule;
}());
export { NetconfLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztJQUdsRCxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDZjtBQUVEO0lBQUE7SUFZZ0MsQ0FBQzs7Z0JBWmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxtQkFBTyxnQkFBZ0IsQ0FBRTtvQkFDckMsT0FBTyxtQkFBTyxnQkFBZ0IsQ0FBRTtvQkFDaEMsU0FBUyxFQUFFO3dCQUNULGFBQWE7cUJBQ2Q7aUJBQ0Y7O0lBQytCLHVCQUFDO0NBQUEsQUFaakMsSUFZaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmV0Y29uZkxpYkNvbXBvbmVudCB9IGZyb20gJy4vbmV0Y29uZi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlUXVpY2tzd2l0Y2hDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kZXZpY2UtcXVpY2tzd2l0Y2guY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VTZWxlY3Rpb25JdGVtQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc3ViY29tcG9uZW50cy9kZXZpY2Utc2VsZWN0aW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7Q29udGVudEJveENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge1BvcHVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZXZpY2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RldmljZS5zZXJ2aWNlJztcblxuXG5jb25zdCBzaGFyZWRDb21wb25lbnRzID0gW1xuICBOZXRjb25mTGliQ29tcG9uZW50LFxuICBEZXZpY2VRdWlja3N3aXRjaENvbXBvbmVudCxcbiAgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25JdGVtQ29tcG9uZW50LFxuICBDb250ZW50Qm94Q29tcG9uZW50LFxuICBQb3B1cENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uc2hhcmVkQ29tcG9uZW50cyBdLFxuICBleHBvcnRzOiBbIC4uLnNoYXJlZENvbXBvbmVudHMgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGV2aWNlU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ldGNvbmZMaWJNb2R1bGUgeyB9XG4iXX0=