/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/subcomponents/device-selection-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Device } from '../../classes/device';
export class DeviceSelectionItemComponent {
    constructor() {
        this.selectedChange = new EventEmitter();
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    changeSelection() {
        this.selectedChange.emit(!this.selected);
    }
}
DeviceSelectionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-selection-item',
                template: "<div class=\"container-fluid device-item clickable\" (click)=\"changeSelection()\">\r\n  <div class=\"row p-2\">\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <p class=\"device-selection-title\">\r\n        <span class=\"device-name\"> {{device.hostname}}:{{device.port}}</span>\r\n        <span class=\"hostname\" *ngIf=\"device.name\">{{device.name}}</span>\r\n      </p>\r\n      <p class=\"mb-0\">{{device.username}}</p>\r\n    </div>\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <label class=\"checkbox-container\">\r\n        <input type=\"checkbox\" [checked]=\"selected\" (change)=\"changeSelection(); $event.stopPropagation()\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
            }] }
];
DeviceSelectionItemComponent.ctorParameters = () => [];
DeviceSelectionItemComponent.propDecorators = {
    device: [{ type: Input }],
    selected: [{ type: Input }],
    selectedChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DeviceSelectionItemComponent.prototype.device;
    /** @type {?} */
    DeviceSelectionItemComponent.prototype.selected;
    /** @type {?} */
    DeviceSelectionItemComponent.prototype.selectedChange;
    /** @type {?} */
    DeviceSelectionItemComponent.prototype.compatibleDevices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldGNvbmYtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc3ViY29tcG9uZW50cy9kZXZpY2Utc2VsZWN0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFRNUMsTUFBTTtJQU9KO1FBSFUsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RSxzQkFBaUIsR0FBYSxFQUFFLENBQUM7SUFHakMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsOHZCQUFxRDs7YUFFdEQ7Ozs7cUJBR0UsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07Ozs7SUFGUCw4Q0FBd0I7O0lBQ3hCLGdEQUEyQjs7SUFDM0Isc0RBQThFOztJQUM5RSx5REFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRldmljZS1zZWxlY3Rpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RldmljZS1zZWxlY3Rpb24taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VsZWN0aW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRldmljZTogRGV2aWNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIGNvbXBhdGlibGVEZXZpY2VzOiBEZXZpY2VbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2VsZWN0aW9uKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCF0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==