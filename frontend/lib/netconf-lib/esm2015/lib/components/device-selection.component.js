/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeviceService } from '../netconf-lib.service';
export class DeviceSelectionComponent {
    /**
     * @param {?} deviceService
     */
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.devicesSelected = new EventEmitter();
        this.compatibleDevices = [];
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const devices = this.deviceService.getCompatibleDevices(this.schemaFilter);
        for (const d of devices) {
            this.compatibleDevices.push({ device: d, selected: true });
        }
    }
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    areDevicesSelected() {
        for (const d of this.compatibleDevices) {
            if (d.selected) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setAllSelectionsTo(val) {
        for (const d of this.compatibleDevices) {
            d.selected = val;
        }
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.areDevicesSelected()) {
            /** @type {?} */
            const selectedDevices = [];
            for (const d of this.compatibleDevices) {
                if (d.selected) {
                    selectedDevices.push(d.device);
                }
            }
            console.log(selectedDevices);
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            console.log('nothing selected');
            this.errorMessage = 'No devices selected';
        }
    }
}
DeviceSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-selection',
                template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let device of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"device.device\"\r\n                                 [(selected)]=\"device.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <p class=\"error-text text-right\">No compatible devices found.</p>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
            }] }
];
DeviceSelectionComponent.ctorParameters = () => [
    { type: DeviceService }
];
DeviceSelectionComponent.propDecorators = {
    schemaFilter: [{ type: Input }],
    devicesSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DeviceSelectionComponent.prototype.schemaFilter;
    /** @type {?} */
    DeviceSelectionComponent.prototype.devicesSelected;
    /** @type {?} */
    DeviceSelectionComponent.prototype.compatibleDevices;
    /** @type {?} */
    DeviceSelectionComponent.prototype.errorMessage;
    /**
     * @type {?}
     * @private
     */
    DeviceSelectionComponent.prototype.deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFPckQsTUFBTTs7OztJQVFKLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnZDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDakYsc0JBQWlCLEdBQTBDLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFFLEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7UUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFZO1FBQzdCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFOztrQkFDdkIsZUFBZSxHQUFhLEVBQUU7WUFDcEMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtM0NBQWdEOzthQUVqRDs7O1lBTk8sYUFBYTs7OzJCQVNsQixLQUFLOzhCQUNMLE1BQU07Ozs7SUFEUCxnREFBMkI7O0lBQzNCLG1EQUFpRjs7SUFDakYscURBQThEOztJQUU5RCxnREFBa0I7Ozs7O0lBRU4saURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtEZXZpY2VTZXJ2aWNlfSBmcm9tICcuLi9uZXRjb25mLWxpYi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRldmljZS1zZWxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERldmljZVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHNjaGVtYUZpbHRlciA9ICcnO1xyXG4gIEBPdXRwdXQoKSBkZXZpY2VzU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERldmljZVtdPigpO1xyXG4gIGNvbXBhdGlibGVEZXZpY2VzOiB7ZGV2aWNlOiBEZXZpY2UsIHNlbGVjdGVkOiBib29sZWFufVtdID0gW107XHJcblxyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXRDb21wYXRpYmxlRGV2aWNlcyh0aGlzLnNjaGVtYUZpbHRlcik7XHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGV2aWNlcykge1xyXG4gICAgICB0aGlzLmNvbXBhdGlibGVEZXZpY2VzLnB1c2goe2RldmljZTogZCwgc2VsZWN0ZWQ6IHRydWV9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSwgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGRldmljZSBzZWxlY3RlZC4gUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgYXJlRGV2aWNlc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgaWYgKGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsU2VsZWN0aW9uc1RvKHZhbDogYm9vbGVhbikge1xyXG4gICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgZC5zZWxlY3RlZCA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmFyZURldmljZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgICBpZiAoZC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWREZXZpY2VzLnB1c2goZC5kZXZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZERldmljZXMpO1xyXG4gICAgICB0aGlzLmRldmljZXNTZWxlY3RlZC5lbWl0KHNlbGVjdGVkRGV2aWNlcyk7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90aGluZyBzZWxlY3RlZCcpO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyBkZXZpY2VzIHNlbGVjdGVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==