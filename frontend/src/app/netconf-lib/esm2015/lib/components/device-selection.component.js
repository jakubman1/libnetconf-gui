/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
export class DeviceSelectionComponent {
    /**
     * @param {?} sessionService
     */
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.schemaFilter = '';
        this.devicesSelected = new EventEmitter();
        this.compatibleDevices = [];
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reload();
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
                    selectedDevices.push(d.session);
                }
            }
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'No devices selected';
        }
    }
    /**
     * @return {?}
     */
    reload() {
        // const sessions = this.sessionService.getCompatibleDeviceSessions('');
        /** @type {?} */
        const sessions = this.sessionService.sessions;
        this.sessionService.sessionsChanged.subscribe((/**
         * @param {?} ses
         * @return {?}
         */
        ses => {
            for (const s of ses) {
                this.compatibleDevices.push({ session: s, selected: true });
            }
        }));
        for (const s of sessions) {
            this.compatibleDevices.push({ session: s, selected: true });
        }
    }
}
DeviceSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-selection',
                template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"reload()\">Reload device list</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let session of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"session.session.device\"\r\n                                 [(selected)]=\"session.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
            }] }
];
DeviceSelectionComponent.ctorParameters = () => [
    { type: SessionService }
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
    DeviceSelectionComponent.prototype.sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFRM0QsTUFBTTs7OztJQVFKLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU56QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ25GLHNCQUFpQixHQUE0QyxFQUFFLENBQUM7UUFFaEUsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7UUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFZO1FBQzdCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFOztrQkFDdkIsZUFBZSxHQUFjLEVBQUU7WUFDckMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakM7YUFDRjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07OztjQUVFLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUMzQyxHQUFHLENBQUMsRUFBRTtZQUNKLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUMzRDtRQUNILENBQUMsRUFDRixDQUFDO1FBQ0YsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGkrQ0FBZ0Q7O2FBRWpEOzs7WUFQTyxjQUFjOzs7MkJBVW5CLEtBQUs7OEJBQ0wsTUFBTTs7OztJQURQLGdEQUEyQjs7SUFDM0IsbURBQW1GOztJQUNuRixxREFBZ0U7O0lBRWhFLGdEQUFrQjs7Ozs7SUFFTixrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nlc3Npb25TZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4uL2NsYXNzZXMvc2Vzc2lvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kZXZpY2Utc2VsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2NoZW1hRmlsdGVyID0gJyc7XHJcbiAgQE91dHB1dCgpIGRldmljZXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFNlc3Npb25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlc3Npb25bXT4oKTtcclxuICBjb21wYXRpYmxlRGV2aWNlczoge3Nlc3Npb246IFNlc3Npb24sIHNlbGVjdGVkOiBib29sZWFufVtdID0gW107XHJcblxyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlLCBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZGV2aWNlIHNlbGVjdGVkLiBSZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhcmVEZXZpY2VzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICBpZiAoZC5zZWxlY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxTZWxlY3Rpb25zVG8odmFsOiBib29sZWFuKSB7XHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5jb21wYXRpYmxlRGV2aWNlcykge1xyXG4gICAgICBkLnNlbGVjdGVkID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuYXJlRGV2aWNlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREZXZpY2VzOiBTZXNzaW9uW10gPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgICBpZiAoZC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWREZXZpY2VzLnB1c2goZC5zZXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kZXZpY2VzU2VsZWN0ZWQuZW1pdChzZWxlY3RlZERldmljZXMpO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnTm8gZGV2aWNlcyBzZWxlY3RlZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWxvYWQoKSB7XHJcbiAgICAvLyBjb25zdCBzZXNzaW9ucyA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0Q29tcGF0aWJsZURldmljZVNlc3Npb25zKCcnKTtcclxuICAgIGNvbnN0IHNlc3Npb25zID0gdGhpcy5zZXNzaW9uU2VydmljZS5zZXNzaW9ucztcclxuICAgIHRoaXMuc2Vzc2lvblNlcnZpY2Uuc2Vzc2lvbnNDaGFuZ2VkLnN1YnNjcmliZShcclxuICAgICAgc2VzID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2VzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBhdGlibGVEZXZpY2VzLnB1c2goe3Nlc3Npb246IHMsIHNlbGVjdGVkOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgZm9yIChjb25zdCBzIG9mIHNlc3Npb25zKSB7XHJcbiAgICAgIHRoaXMuY29tcGF0aWJsZURldmljZXMucHVzaCh7c2Vzc2lvbjogcywgc2VsZWN0ZWQ6IHRydWV9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==