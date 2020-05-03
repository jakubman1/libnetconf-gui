/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
var DeviceSelectionComponent = /** @class */ (function () {
    function DeviceSelectionComponent(sessionService) {
        this.sessionService = sessionService;
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
        this.reload();
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
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (d.selected) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                d.selected = val;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        if (this.areDevicesSelected()) {
            /** @type {?} */
            var selectedDevices = [];
            try {
                for (var _b = tslib_1.__values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var d = _c.value;
                    if (d.selected) {
                        selectedDevices.push(d.session);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'No devices selected';
        }
    };
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.reload = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_4, _a;
        // const sessions = this.sessionService.getCompatibleDeviceSessions('');
        /** @type {?} */
        var sessions = this.sessionService.sessions;
        this.sessionService.sessionsChanged.subscribe((/**
         * @param {?} ses
         * @return {?}
         */
        function (ses) {
            var e_5, _a;
            try {
                for (var ses_1 = tslib_1.__values(ses), ses_1_1 = ses_1.next(); !ses_1_1.done; ses_1_1 = ses_1.next()) {
                    var s = ses_1_1.value;
                    _this.compatibleDevices.push({ session: s, selected: true });
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (ses_1_1 && !ses_1_1.done && (_a = ses_1.return)) _a.call(ses_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }));
        try {
            for (var sessions_1 = tslib_1.__values(sessions), sessions_1_1 = sessions_1.next(); !sessions_1_1.done; sessions_1_1 = sessions_1.next()) {
                var s = sessions_1_1.value;
                this.compatibleDevices.push({ session: s, selected: true });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (sessions_1_1 && !sessions_1_1.done && (_a = sessions_1.return)) _a.call(sessions_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    DeviceSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-selection',
                    template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"reload()\">Reload device list</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let session of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"session.session.device\"\r\n                                 [(selected)]=\"session.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                    styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                }] }
    ];
    DeviceSelectionComponent.ctorParameters = function () { return [
        { type: SessionService }
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
    /** @type {?} */
    DeviceSelectionComponent.prototype.sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBRzNEO0lBYUUsa0NBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU54QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ25GLHNCQUFpQixHQUE0QyxFQUFFLENBQUM7UUFFaEUsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQWtCOzs7O0lBQWxCOzs7WUFDRSxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUFuQyxJQUFNLENBQUMsV0FBQTtnQkFDVixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELHFEQUFrQjs7OztJQUFsQixVQUFtQixHQUFZOzs7WUFDN0IsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbkMsSUFBTSxDQUFDLFdBQUE7Z0JBQ1YsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7YUFDbEI7Ozs7Ozs7OztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBTTs7O0lBQU47O1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTs7Z0JBQ3ZCLGVBQWUsR0FBYyxFQUFFOztnQkFDckMsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbkMsSUFBTSxDQUFDLFdBQUE7b0JBQ1YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUNkLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNqQztpQkFDRjs7Ozs7Ozs7O1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBRUQseUNBQU07OztJQUFOO1FBQUEsaUJBYUM7Ozs7WUFYTyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFDM0MsVUFBQSxHQUFHOzs7Z0JBQ0QsS0FBZ0IsSUFBQSxRQUFBLGlCQUFBLEdBQUcsQ0FBQSx3QkFBQSx5Q0FBRTtvQkFBaEIsSUFBTSxDQUFDLGdCQUFBO29CQUNWLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRDs7Ozs7Ozs7O1FBQ0gsQ0FBQyxFQUNGLENBQUM7O1lBQ0YsS0FBZ0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBckIsSUFBTSxDQUFDLHFCQUFBO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQzNEOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGkrQ0FBZ0Q7O2lCQUVqRDs7O2dCQVBPLGNBQWM7OzsrQkFVbkIsS0FBSztrQ0FDTCxNQUFNOztJQTREVCwrQkFBQztDQUFBLEFBcEVELElBb0VDO1NBL0RZLHdCQUF3Qjs7O0lBRW5DLGdEQUEyQjs7SUFDM0IsbURBQW1GOztJQUNuRixxREFBZ0U7O0lBRWhFLGdEQUFrQjs7SUFFTixrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nlc3Npb25TZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4uL2NsYXNzZXMvc2Vzc2lvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kZXZpY2Utc2VsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2NoZW1hRmlsdGVyID0gJyc7XHJcbiAgQE91dHB1dCgpIGRldmljZXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFNlc3Npb25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlc3Npb25bXT4oKTtcclxuICBjb21wYXRpYmxlRGV2aWNlczoge3Nlc3Npb246IFNlc3Npb24sIHNlbGVjdGVkOiBib29sZWFufVtdID0gW107XHJcblxyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUsIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBkZXZpY2Ugc2VsZWN0ZWQuIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGFyZURldmljZXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgIGlmIChkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldEFsbFNlbGVjdGlvbnNUbyh2YWw6IGJvb2xlYW4pIHtcclxuICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgIGQuc2VsZWN0ZWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hcmVEZXZpY2VzU2VsZWN0ZWQoKSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERldmljZXM6IFNlc3Npb25bXSA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICAgIGlmIChkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZERldmljZXMucHVzaChkLnNlc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRldmljZXNTZWxlY3RlZC5lbWl0KHNlbGVjdGVkRGV2aWNlcyk7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyBkZXZpY2VzIHNlbGVjdGVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbG9hZCgpIHtcclxuICAgIC8vIGNvbnN0IHNlc3Npb25zID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXRDb21wYXRpYmxlRGV2aWNlU2Vzc2lvbnMoJycpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25TZXJ2aWNlLnNlc3Npb25zO1xyXG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5zZXNzaW9uc0NoYW5nZWQuc3Vic2NyaWJlKFxyXG4gICAgICBzZXMgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzZXMpIHtcclxuICAgICAgICAgIHRoaXMuY29tcGF0aWJsZURldmljZXMucHVzaCh7c2Vzc2lvbjogcywgc2VsZWN0ZWQ6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBmb3IgKGNvbnN0IHMgb2Ygc2Vzc2lvbnMpIHtcclxuICAgICAgdGhpcy5jb21wYXRpYmxlRGV2aWNlcy5wdXNoKHtzZXNzaW9uOiBzLCBzZWxlY3RlZDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19