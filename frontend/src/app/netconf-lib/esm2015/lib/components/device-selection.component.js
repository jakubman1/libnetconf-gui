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
        this.sessionService.getCompatibleDeviceSessions('').subscribe((/**
         * @param {?} ses
         * @return {?}
         */
        ses => {
            for (const s of ses) {
                this.compatibleDevices.push({ session: s, selected: true });
            }
        }));
        this.sessionService.sessionsChanged.subscribe((/**
         * @param {?} ses
         * @return {?}
         */
        ses => {
            for (const s of ses) {
                this.compatibleDevices.push({ session: s, selected: true });
            }
        }));
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
    /** @type {?} */
    DeviceSelectionComponent.prototype.sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXNlbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RldmljZS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFRM0QsTUFBTTs7OztJQVFKLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU54QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ25GLHNCQUFpQixHQUE0QyxFQUFFLENBQUM7UUFFaEUsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7UUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFZO1FBQzdCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFOztrQkFDdkIsZUFBZSxHQUFjLEVBQUU7WUFDckMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakM7YUFDRjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDM0QsR0FBRyxDQUFDLEVBQUU7WUFDSixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDM0Q7UUFDSCxDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFDM0MsR0FBRyxDQUFDLEVBQUU7WUFDSixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDM0Q7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsaStDQUFnRDs7YUFFakQ7OztZQVBPLGNBQWM7OzsyQkFVbkIsS0FBSzs4QkFDTCxNQUFNOzs7O0lBRFAsZ0RBQTJCOztJQUMzQixtREFBbUY7O0lBQ25GLHFEQUFnRTs7SUFFaEUsZ0RBQWtCOztJQUVOLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2Vzc2lvblNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Nlc3Npb24uc2VydmljZSc7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi4vY2xhc3Nlcy9zZXNzaW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRldmljZS1zZWxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXZpY2Utc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzY2hlbWFGaWx0ZXIgPSAnJztcclxuICBAT3V0cHV0KCkgZGV2aWNlc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPigpO1xyXG4gIGNvbXBhdGlibGVEZXZpY2VzOiB7c2Vzc2lvbjogU2Vzc2lvbiwgc2VsZWN0ZWQ6IGJvb2xlYW59W10gPSBbXTtcclxuXHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSwgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGRldmljZSBzZWxlY3RlZC4gUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgYXJlRGV2aWNlc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgaWYgKGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsU2VsZWN0aW9uc1RvKHZhbDogYm9vbGVhbikge1xyXG4gICAgZm9yIChjb25zdCBkIG9mIHRoaXMuY29tcGF0aWJsZURldmljZXMpIHtcclxuICAgICAgZC5zZWxlY3RlZCA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmFyZURldmljZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGV2aWNlczogU2Vzc2lvbltdID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmNvbXBhdGlibGVEZXZpY2VzKSB7XHJcbiAgICAgICAgaWYgKGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHNlbGVjdGVkRGV2aWNlcy5wdXNoKGQuc2Vzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGV2aWNlc1NlbGVjdGVkLmVtaXQoc2VsZWN0ZWREZXZpY2VzKTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ05vIGRldmljZXMgc2VsZWN0ZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVsb2FkKCkge1xyXG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5nZXRDb21wYXRpYmxlRGV2aWNlU2Vzc2lvbnMoJycpLnN1YnNjcmliZShcclxuICAgICAgc2VzID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2VzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBhdGlibGVEZXZpY2VzLnB1c2goe3Nlc3Npb246IHMsIHNlbGVjdGVkOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5zZXNzaW9uc0NoYW5nZWQuc3Vic2NyaWJlKFxyXG4gICAgICBzZXMgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzZXMpIHtcclxuICAgICAgICAgIHRoaXMuY29tcGF0aWJsZURldmljZXMucHVzaCh7c2Vzc2lvbjogcywgc2VsZWN0ZWQ6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=