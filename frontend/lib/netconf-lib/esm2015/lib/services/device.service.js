/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export class DeviceService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._connectedDevices = [];
        this.connectedDevicesChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get connectedDevices() {
        return this._connectedDevices;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set connectedDevices(value) {
        this._connectedDevices = value;
        this.connectedDevicesChanged.emit(value);
    }
    /**
     * @return {?}
     */
    getConnectedDevices() {
        return this.connectedDevices;
    }
    /**
     * @return {?}
     */
    getSavedDevices() {
        return this.http.get('/netconf/devices');
    }
    /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    saveDevice(hostname, port, username, deviceName = '', password = '', connect = false) {
        /** @type {?} */
        const dev = {
            fingerprint: '',
            id: '',
            name: deviceName,
            hostname,
            port,
            username,
            password
        };
        if (connect) {
            this.connectToDevice(dev).subscribe();
        }
        return this.http.post('/netconf/device', { device: dev });
    }
    /**
     * @param {?} device
     * @return {?}
     */
    connectToDevice(device) {
        // this.connectedDevices.push(device);
        /** @type {?} */
        const body = {
            'name': device.name,
            'hostname': device.hostname,
            'port': device.port,
            'username': device.username,
            'password': device.password
        };
        return this.http.post('/netconf/connect', body);
    }
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    getCompatibleDevices(filter) {
        return this.connectedDevices;
    }
    /**
     * @param {?} device
     * @return {?}
     */
    disconnectDevice(device) {
        return of(null);
    }
}
DeviceService.decorators = [
    { type: Injectable }
];
DeviceService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype._connectedDevices;
    /** @type {?} */
    DeviceService.prototype.connectedDevicesChanged;
    /** @type {?} */
    DeviceService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBS2hELE1BQU07Ozs7SUFDSixZQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWTNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUVsQyw0QkFBdUIsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQWJ0RixDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQWU7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7Ozs7SUFHTSxVQUFVLENBQUMsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFVBQVUsR0FBRyxFQUFFLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixPQUFPLEdBQUcsS0FBSzs7Y0FDekIsR0FBRyxHQUFXO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRO1lBQ1IsSUFBSTtZQUNKLFFBQVE7WUFDUixRQUFRO1NBQ1Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLGlCQUFpQixFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsTUFBYzs7O2NBRTdCLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUtNLG9CQUFvQixDQUFDLE1BQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzdCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7OztZQXRFRixVQUFVOzs7WUFKSCxVQUFVOzs7Ozs7O0lBa0JoQiwwQ0FBeUM7O0lBRXpDLGdEQUFzRjs7SUFkMUUsNkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi4vY2xhc3Nlcy9zZXNzaW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldmljZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBnZXQgY29ubmVjdGVkRGV2aWNlcygpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHNldCBjb25uZWN0ZWREZXZpY2VzKHZhbHVlOiBEZXZpY2VbXSkge1xyXG4gICAgdGhpcy5fY29ubmVjdGVkRGV2aWNlcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb25uZWN0ZWREZXZpY2VzQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Nvbm5lY3RlZERldmljZXM6IERldmljZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWREZXZpY2VzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPERldmljZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGV2aWNlW10+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXRDb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2F2ZWREZXZpY2VzKCk6IE9ic2VydmFibGU8RGV2aWNlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERldmljZVtdPignL25ldGNvbmYvZGV2aWNlcycpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzYXZlRGV2aWNlKGhvc3RuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlTmFtZSA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IGRldjogRGV2aWNlID0ge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgbmFtZTogZGV2aWNlTmFtZSxcclxuICAgICAgaG9zdG5hbWUsXHJcbiAgICAgIHBvcnQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29ubmVjdCkge1xyXG4gICAgICB0aGlzLmNvbm5lY3RUb0RldmljZShkZXYpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PG9iamVjdD4oJy9uZXRjb25mL2RldmljZScsIHtkZXZpY2U6IGRldn0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RUb0RldmljZShkZXZpY2U6IERldmljZSkge1xyXG4gICAgLy8gdGhpcy5jb25uZWN0ZWREZXZpY2VzLnB1c2goZGV2aWNlKTtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICduYW1lJzogZGV2aWNlLm5hbWUsXHJcbiAgICAgICdob3N0bmFtZSc6IGRldmljZS5ob3N0bmFtZSxcclxuICAgICAgJ3BvcnQnOiBkZXZpY2UucG9ydCxcclxuICAgICAgJ3VzZXJuYW1lJzogZGV2aWNlLnVzZXJuYW1lLFxyXG4gICAgICAncGFzc3dvcmQnOiBkZXZpY2UucGFzc3dvcmRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9uZXRjb25mL2Nvbm5lY3QnLCBib2R5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBpcyB4cGF0aCAoPylcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZXMoZmlsdGVyOiBhbnkpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdERldmljZShkZXZpY2U6IERldmljZSkge1xyXG4gICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19