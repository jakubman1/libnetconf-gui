/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
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
            this.connectToDevice(dev).subscribe(); // TODO: Show 'now connecting' modal window
        }
        return this.http.post('/netconf/device', { device: dev });
    }
    /**
     * @param {?} device
     * @return {?}
     */
    connectToDevice(device) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUtoRCxNQUFNOzs7O0lBQ0osWUFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVkzQixzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFbEMsNEJBQXVCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7SUFidEYsQ0FBQzs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFlO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBTU0sbUJBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7Ozs7O0lBR00sVUFBVSxDQUFDLFFBQWdCLEVBQ2hCLElBQVksRUFDWixRQUFnQixFQUNoQixVQUFVLEdBQUcsRUFBRSxFQUNmLFFBQVEsR0FBRyxFQUFFLEVBQ2IsT0FBTyxHQUFHLEtBQUs7O2NBQ3pCLEdBQUcsR0FBVztZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLEVBQUUsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUTtZQUNSLElBQUk7WUFDSixRQUFRO1lBQ1IsUUFBUTtTQUNUO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsMkNBQTJDO1NBQ25GO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLE1BQWM7O2NBQzdCLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUtNLG9CQUFvQixDQUFDLE1BQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7O1lBakVGLFVBQVU7OztZQUpILFVBQVU7Ozs7Ozs7SUFrQmhCLDBDQUF5Qzs7SUFFekMsZ0RBQXNGOztJQWQxRSw2QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHZW5lcmljU2VydmVyUmVzcG9uc2V9IGZyb20gJy4uL2NsYXNzZXMvR2VuZXJpY1NlcnZlclJlc3BvbnNlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi9jbGFzc2VzL3Nlc3Npb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbm5lY3RlZERldmljZXModmFsdWU6IERldmljZVtdKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0ZWREZXZpY2VzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXNDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29ubmVjdGVkRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZERldmljZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RGV2aWNlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4oKTtcclxuXHJcbiAgcHVibGljIGdldENvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTYXZlZERldmljZXMoKTogT2JzZXJ2YWJsZTxEZXZpY2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV2aWNlW10+KCcvbmV0Y29uZi9kZXZpY2VzJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNhdmVEZXZpY2UoaG9zdG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VOYW1lID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ID0gZmFsc2UpOiBPYnNlcnZhYmxlPG9iamVjdD4ge1xyXG4gICAgY29uc3QgZGV2OiBEZXZpY2UgPSB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBuYW1lOiBkZXZpY2VOYW1lLFxyXG4gICAgICBob3N0bmFtZSxcclxuICAgICAgcG9ydCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25uZWN0KSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdFRvRGV2aWNlKGRldikuc3Vic2NyaWJlKCk7IC8vIFRPRE86IFNob3cgJ25vdyBjb25uZWN0aW5nJyBtb2RhbCB3aW5kb3dcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxvYmplY3Q+KCcvbmV0Y29uZi9kZXZpY2UnLCB7ZGV2aWNlOiBkZXZ9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0VG9EZXZpY2UoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICduYW1lJzogZGV2aWNlLm5hbWUsXHJcbiAgICAgICdob3N0bmFtZSc6IGRldmljZS5ob3N0bmFtZSxcclxuICAgICAgJ3BvcnQnOiBkZXZpY2UucG9ydCxcclxuICAgICAgJ3VzZXJuYW1lJzogZGV2aWNlLnVzZXJuYW1lLFxyXG4gICAgICAncGFzc3dvcmQnOiBkZXZpY2UucGFzc3dvcmRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9uZXRjb25mL2Nvbm5lY3QnLCBib2R5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBpcyB4cGF0aCAoPylcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZXMoZmlsdGVyOiBhbnkpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==