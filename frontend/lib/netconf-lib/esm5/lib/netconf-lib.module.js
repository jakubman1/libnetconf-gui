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
                    imports: [CommonModule, RouterModule, HttpClientModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztJQUdsRCxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDZjtBQUVEO0lBQUE7SUFRZ0MsQ0FBQzs7Z0JBUmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUN2RCxZQUFZLG1CQUFPLGdCQUFnQixDQUFFO29CQUNyQyxPQUFPLG1CQUFPLGdCQUFnQixDQUFFO29CQUNoQyxTQUFTLEVBQUU7d0JBQ1QsYUFBYTtxQkFDZDtpQkFDRjs7SUFDK0IsdUJBQUM7Q0FBQSxBQVJqQyxJQVFpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZXRjb25mTGliQ29tcG9uZW50IH0gZnJvbSAnLi9uZXRjb25mLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VRdWlja3N3aXRjaENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldmljZS1xdWlja3N3aXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVNlbGVjdGlvbkl0ZW1Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zdWJjb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250ZW50Qm94Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7UG9wdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZGV2aWNlLnNlcnZpY2UnO1xuXG5cbmNvbnN0IHNoYXJlZENvbXBvbmVudHMgPSBbXG4gIE5ldGNvbmZMaWJDb21wb25lbnQsXG4gIERldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25Db21wb25lbnQsXG4gIERldmljZVNlbGVjdGlvbkl0ZW1Db21wb25lbnQsXG4gIENvbnRlbnRCb3hDb21wb25lbnQsXG4gIFBvcHVwQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uc2hhcmVkQ29tcG9uZW50cyBdLFxuICBleHBvcnRzOiBbIC4uLnNoYXJlZENvbXBvbmVudHMgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGV2aWNlU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ldGNvbmZMaWJNb2R1bGUgeyB9XG4iXX0=