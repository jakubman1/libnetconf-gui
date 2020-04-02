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
        console.log('DEVICE SERVICE');
        console.log(this.deviceService);
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
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'No devices selected';
        }
    };
    DeviceSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-selection',
                    template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let device of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"device.device\"\r\n                                 [(selected)]=\"device.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                    styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXJEO0lBYUUsa0NBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnZDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDakYsc0JBQWlCLEdBQTBDLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSOztRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFDMUUsS0FBZ0IsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtnQkFBcEIsSUFBTSxDQUFDLG9CQUFBO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQzFEOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQWtCOzs7O0lBQWxCOzs7WUFDRSxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUFuQyxJQUFNLENBQUMsV0FBQTtnQkFDVixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELHFEQUFrQjs7OztJQUFsQixVQUFtQixHQUFZOzs7WUFDN0IsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbkMsSUFBTSxDQUFDLFdBQUE7Z0JBQ1YsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7YUFDbEI7Ozs7Ozs7OztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBTTs7O0lBQU47O1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTs7Z0JBQ3ZCLGVBQWUsR0FBYSxFQUFFOztnQkFDcEMsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbkMsSUFBTSxDQUFDLFdBQUE7b0JBQ1YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNkLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQztpQkFDRjs7Ozs7Ozs7O1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDAzQ0FBZ0Q7O2lCQUVqRDs7O2dCQU5PLGFBQWE7OzsrQkFTbEIsS0FBSztrQ0FDTCxNQUFNOztJQWtEVCwrQkFBQztDQUFBLEFBMURELElBMERDO1NBckRZLHdCQUF3Qjs7O0lBRW5DLGdEQUEyQjs7SUFDM0IsbURBQWlGOztJQUNqRixxREFBOEQ7O0lBRTlELGdEQUFrQjs7Ozs7SUFFTixpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4uL25ldGNvbmYtbGliLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGV2aWNlLXNlbGVjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2NoZW1hRmlsdGVyID0gJyc7XHJcbiAgQE91dHB1dCgpIGRldmljZXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPERldmljZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGV2aWNlW10+KCk7XHJcbiAgY29tcGF0aWJsZURldmljZXM6IHtkZXZpY2U6IERldmljZSwgc2VsZWN0ZWQ6IGJvb2xlYW59W10gPSBbXTtcclxuXHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnREVWSUNFIFNFUlZJQ0UnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGV2aWNlU2VydmljZSk7XHJcbiAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldENvbXBhdGlibGVEZXZpY2VzKHRoaXMuc2NoZW1hRmlsdGVyKTtcclxuICAgIGZvciAoY29uc3QgZCBvZiBkZXZpY2VzKSB7XHJcbiAgICAgIHRoaXMuY29tcGF0aWJsZURldmljZXMucHVzaCh7ZGV2aWNlOiBkLCBzZWxlY3RlZDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlLCBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZGV2aWNlIHNlbGVjdGVkLiBSZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhcmVEZXZpY2VzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICBpZiAoZC5zZWxlY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxTZWxlY3Rpb25zVG8odmFsOiBib29sZWFuKSB7XHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICBkLnNlbGVjdGVkID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuYXJlRGV2aWNlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREZXZpY2VzOiBEZXZpY2VbXSA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICAgIGlmIChkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZERldmljZXMucHVzaChkLmRldmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGV2aWNlc1NlbGVjdGVkLmVtaXQoc2VsZWN0ZWREZXZpY2VzKTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ05vIGRldmljZXMgc2VsZWN0ZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19