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
import { PopupComponent } from "./components/popup.component";
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
                    imports: [CommonModule, RouterModule],
                    declarations: tslib_1.__spread(sharedComponents),
                    exports: tslib_1.__spread(sharedComponents),
                },] }
    ];
    return NetconfLibModule;
}());
export { NetconfLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0Y29uZi1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0Y29uZi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7O0lBR3RELGdCQUFnQixHQUFHO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztDQUNmO0FBRUQ7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLFlBQVksbUJBQU8sZ0JBQWdCLENBQUU7b0JBQ3JDLE9BQU8sbUJBQU8sZ0JBQWdCLENBQUU7aUJBQ2pDOztJQUMrQix1QkFBQztDQUFBLEFBTGpDLElBS2lDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5ldGNvbmZMaWJDb21wb25lbnQgfSBmcm9tICcuL25ldGNvbmYtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldmljZVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7RGV2aWNlU2VsZWN0aW9uSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3N1YmNvbXBvbmVudHMvZGV2aWNlLXNlbGVjdGlvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRlbnRCb3hDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3B1cENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cC5jb21wb25lbnRcIjtcblxuXG5jb25zdCBzaGFyZWRDb21wb25lbnRzID0gW1xuICBOZXRjb25mTGliQ29tcG9uZW50LFxuICBEZXZpY2VRdWlja3N3aXRjaENvbXBvbmVudCxcbiAgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBEZXZpY2VTZWxlY3Rpb25JdGVtQ29tcG9uZW50LFxuICBDb250ZW50Qm94Q29tcG9uZW50LFxuICBQb3B1cENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbIC4uLnNoYXJlZENvbXBvbmVudHMgXSxcbiAgZXhwb3J0czogWyAuLi5zaGFyZWRDb21wb25lbnRzIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5ldGNvbmZMaWJNb2R1bGUgeyB9XG4iXX0=