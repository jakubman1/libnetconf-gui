/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-quickswitch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';
export class DeviceQuickswitchComponent {
    /**
     * @param {?} deviceService
     */
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.vertical = false;
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DeviceQuickswitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-quickswitch',
                template: `
    <p>
      tbd
    </p>
  `
            }] }
];
DeviceQuickswitchComponent.ctorParameters = () => [
    { type: DeviceService }
];
DeviceQuickswitchComponent.propDecorators = {
    schemaFilter: [{ type: Input }],
    vertical: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldGNvbmYtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGV2aWNlLXF1aWNrc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQVl6RCxNQUFNOzs7O0lBTUosWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKdkMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixzQkFBaUIsR0FBYSxFQUFFLENBQUM7SUFFbUIsQ0FBQzs7OztJQUVyRCxRQUFRO0lBRVIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7R0FJVDthQUVGOzs7WUFYTyxhQUFhOzs7MkJBY2xCLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUROLGtEQUEyQjs7SUFDM0IsOENBQTBCOztJQUMxQix1REFBaUM7Ozs7O0lBRXJCLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2RldmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRldmljZS1xdWlja3N3aXRjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICB0YmRcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIERldmljZVF1aWNrc3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2NoZW1hRmlsdGVyID0gJyc7XHJcbiAgQElucHV0KCkgdmVydGljYWwgPSBmYWxzZTtcclxuICBjb21wYXRpYmxlRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19