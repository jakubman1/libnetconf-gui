/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-quickswitch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';
var DeviceQuickswitchComponent = /** @class */ (function () {
    function DeviceQuickswitchComponent(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.vertical = false;
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    DeviceQuickswitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DeviceQuickswitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-quickswitch',
                    template: "\n    <p>\n      tbd\n    </p>\n  "
                }] }
    ];
    DeviceQuickswitchComponent.ctorParameters = function () { return [
        { type: DeviceService }
    ]; };
    DeviceQuickswitchComponent.propDecorators = {
        schemaFilter: [{ type: Input }],
        vertical: [{ type: Input }]
    };
    return DeviceQuickswitchComponent;
}());
export { DeviceQuickswitchComponent };
if (false) {
    /** @type {?} */
    DeviceQuickswitchComponent.prototype.schemaFilter;
    /** @type {?} */
    DeviceQuickswitchComponent.prototype.vertical;
    /** @type {?} */
    DeviceQuickswitchComponent.prototype.compatibleDevices;
    /**
     * @type {?}
     * @private
     */
    DeviceQuickswitchComponent.prototype.deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldGNvbmYtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RDtJQWVFLG9DQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUp2QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztJQUVtQixDQUFDOzs7O0lBRXJELDZDQUFROzs7SUFBUjtJQUVBLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLG9DQUlUO2lCQUVGOzs7Z0JBWE8sYUFBYTs7OytCQWNsQixLQUFLOzJCQUNMLEtBQUs7O0lBU1IsaUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQVpZLDBCQUEwQjs7O0lBRXJDLGtEQUEyQjs7SUFDM0IsOENBQTBCOztJQUMxQix1REFBaUM7Ozs7O0lBRXJCLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2RldmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRldmljZS1xdWlja3N3aXRjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICB0YmRcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIERldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2NoZW1hRmlsdGVyID0gJyc7XHJcbiAgQElucHV0KCkgdmVydGljYWwgPSBmYWxzZTtcclxuICBjb21wYXRpYmxlRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19