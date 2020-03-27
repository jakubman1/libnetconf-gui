/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeviceService } from '../netconf-lib.service';
var DeviceSelectionComponent = /** @class */ (function () {
    function DeviceSelectionComponent(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.devicesSelected = new EventEmitter();
        this.compatibleDevices = [];
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var devices = this.deviceService.getCompatibleDevices(this.schemaFilter);
        try {
            for (var devices_1 = tslib_1.__values(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                var d = devices_1_1.value;
                this.compatibleDevices.push({ device: d, selected: true });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     */
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    DeviceSelectionComponent.prototype.areDevicesSelected = /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (d.selected) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DeviceSelectionComponent.prototype.setAllSelectionsTo = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                d.selected = val;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        if (this.areDevicesSelected()) {
            /** @type {?} */
            var selectedDevices = [];
            try {
                for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var d = _c.value;
                    if (d.selected) {
                        selectedDevices.push(d.device);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            console.log(selectedDevices);
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            console.log('nothing selected');
            this.errorMessage = 'No devices selected';
        }
    };
    DeviceSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-selection',
                    template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let device of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"device.device\"\r\n                                 [(selected)]=\"device.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <p class=\"error-text text-right\">No compatible devices found.</p>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                    styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:none}.clickable::-moz-selection,.clickable::selection{background:0 0;color:none}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:10px}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                }] }
    ];
    DeviceSelectionComponent.ctorParameters = function () { return [
        { type: DeviceService }
    ]; };
    DeviceSelectionComponent.propDecorators = {
        schemaFilter: [{ type: Input }],
        devicesSelected: [{ type: Output }]
    };
    return DeviceSelectionComponent;
}());
export { DeviceSelectionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXJEO0lBYUUsa0NBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnZDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDakYsc0JBQWlCLEdBQTBDLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSOzs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOztZQUMxRSxLQUFnQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUFwQixJQUFNLENBQUMsb0JBQUE7Z0JBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDMUQ7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxREFBa0I7Ozs7SUFBbEI7OztZQUNFLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQW5DLElBQU0sQ0FBQyxXQUFBO2dCQUNWLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQscURBQWtCOzs7O0lBQWxCLFVBQW1CLEdBQVk7OztZQUM3QixLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUFuQyxJQUFNLENBQUMsV0FBQTtnQkFDVixDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzthQUNsQjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFNOzs7SUFBTjs7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFOztnQkFDdkIsZUFBZSxHQUFhLEVBQUU7O2dCQUNwQyxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO29CQUFuQyxJQUFNLENBQUMsV0FBQTtvQkFDVixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7d0JBQ2QsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2hDO2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsbTNDQUFnRDs7aUJBRWpEOzs7Z0JBTk8sYUFBYTs7OytCQVNsQixLQUFLO2tDQUNMLE1BQU07O0lBa0RULCtCQUFDO0NBQUEsQUExREQsSUEwREM7U0FyRFksd0JBQXdCOzs7SUFFbkMsZ0RBQTJCOztJQUMzQixtREFBaUY7O0lBQ2pGLHFEQUE4RDs7SUFFOUQsZ0RBQWtCOzs7OztJQUVOLGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7RGV2aWNlU2VydmljZX0gZnJvbSAnLi4vbmV0Y29uZi1saWIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kZXZpY2Utc2VsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzY2hlbWFGaWx0ZXIgPSAnJztcclxuICBAT3V0cHV0KCkgZGV2aWNlc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RGV2aWNlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4oKTtcclxuICBjb21wYXRpYmxlRGV2aWNlczoge2RldmljZTogRGV2aWNlLCBzZWxlY3RlZDogYm9vbGVhbn1bXSA9IFtdO1xyXG5cclxuICBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0Q29tcGF0aWJsZURldmljZXModGhpcy5zY2hlbWFGaWx0ZXIpO1xyXG4gICAgZm9yIChjb25zdCBkIG9mIGRldmljZXMpIHtcclxuICAgICAgdGhpcy5jb21wYXRpYmxlRGV2aWNlcy5wdXNoKHtkZXZpY2U6IGQsIHNlbGVjdGVkOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUsIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBkZXZpY2Ugc2VsZWN0ZWQuIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGFyZURldmljZXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgIGlmIChkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldEFsbFNlbGVjdGlvbnNUbyh2YWw6IGJvb2xlYW4pIHtcclxuICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgIGQuc2VsZWN0ZWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hcmVEZXZpY2VzU2VsZWN0ZWQoKSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERldmljZXM6IERldmljZVtdID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgICAgaWYgKGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHNlbGVjdGVkRGV2aWNlcy5wdXNoKGQuZGV2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWREZXZpY2VzKTtcclxuICAgICAgdGhpcy5kZXZpY2VzU2VsZWN0ZWQuZW1pdChzZWxlY3RlZERldmljZXMpO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdGhpbmcgc2VsZWN0ZWQnKTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnTm8gZGV2aWNlcyBzZWxlY3RlZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=