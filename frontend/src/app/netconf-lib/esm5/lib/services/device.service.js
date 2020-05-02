/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
        this._connectedDevices = [];
        this.connectedDevicesChanged = new EventEmitter();
    }
    Object.defineProperty(DeviceService.prototype, "connectedDevices", {
        get: /**
         * @return {?}
         */
        function () {
            return this._connectedDevices;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._connectedDevices = value;
            this.connectedDevicesChanged.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DeviceService.prototype.getConnectedDevices = /**
     * @return {?}
     */
    function () {
        return this.connectedDevices;
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getSavedDevices = /**
     * @return {?}
     */
    function () {
        return this.http.get('/netconf/devices');
    };
    /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    DeviceService.prototype.saveDevice = /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    function (hostname, port, username, deviceName, password, connect) {
        if (deviceName === void 0) { deviceName = ''; }
        if (password === void 0) { password = ''; }
        if (connect === void 0) { connect = false; }
        /** @type {?} */
        var dev = {
            fingerprint: '',
            id: '',
            name: deviceName,
            hostname: hostname,
            port: port,
            username: username,
            password: password
        };
        if (connect) {
            this.connectToDevice(dev).subscribe(); // TODO: Show 'now connecting' modal window
        }
        return this.http.post('/netconf/device', { device: dev });
    };
    /**
     * @param {?} device
     * @return {?}
     */
    DeviceService.prototype.connectToDevice = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        /** @type {?} */
        var body = {
            'name': device.name,
            'hostname': device.hostname,
            'port': device.port,
            'username': device.username,
            'password': device.password
        };
        return this.http.post('/netconf/connect', body);
    };
    /**
     * Filter is xpath (?)
     */
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    DeviceService.prototype.getCompatibleDevices = /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        return this.connectedDevices;
    };
    DeviceService.decorators = [
        { type: Injectable }
    ];
    DeviceService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return DeviceService;
}());
export { DeviceService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUloRDtJQUVFLHVCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWTNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUVsQyw0QkFBdUIsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQWJ0RixDQUFDO0lBRUQsc0JBQUksMkNBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFFRCxVQUFxQixLQUFlO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FMQTs7OztJQVdNLDJDQUFtQjs7O0lBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLHVDQUFlOzs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7OztJQUdNLGtDQUFVOzs7Ozs7Ozs7SUFBakIsVUFBa0IsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFVBQWUsRUFDZixRQUFhLEVBQ2IsT0FBZTtRQUZmLDJCQUFBLEVBQUEsZUFBZTtRQUNmLHlCQUFBLEVBQUEsYUFBYTtRQUNiLHdCQUFBLEVBQUEsZUFBZTs7WUFDekIsR0FBRyxHQUFXO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRLFVBQUE7WUFDUixJQUFJLE1BQUE7WUFDSixRQUFRLFVBQUE7WUFDUixRQUFRLFVBQUE7U0FDVDtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLDJDQUEyQztTQUNuRjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVNLHVDQUFlOzs7O0lBQXRCLFVBQXVCLE1BQWM7O1lBQzdCLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksNENBQW9COzs7OztJQUEzQixVQUE0QixNQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7O2dCQWpFRixVQUFVOzs7Z0JBSkgsVUFBVTs7SUF3RWxCLG9CQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FuRVksYUFBYTs7Ozs7O0lBYXhCLDBDQUF5Qzs7SUFFekMsZ0RBQXNGOztJQWQxRSw2QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHZW5lcmljU2VydmVyUmVzcG9uc2V9IGZyb20gJy4uL2NsYXNzZXMvR2VuZXJpY1NlcnZlclJlc3BvbnNlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi9jbGFzc2VzL3Nlc3Npb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbm5lY3RlZERldmljZXModmFsdWU6IERldmljZVtdKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0ZWREZXZpY2VzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXNDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29ubmVjdGVkRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZERldmljZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RGV2aWNlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4oKTtcclxuXHJcbiAgcHVibGljIGdldENvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTYXZlZERldmljZXMoKTogT2JzZXJ2YWJsZTxEZXZpY2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV2aWNlW10+KCcvbmV0Y29uZi9kZXZpY2VzJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNhdmVEZXZpY2UoaG9zdG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VOYW1lID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ID0gZmFsc2UpOiBPYnNlcnZhYmxlPG9iamVjdD4ge1xyXG4gICAgY29uc3QgZGV2OiBEZXZpY2UgPSB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBuYW1lOiBkZXZpY2VOYW1lLFxyXG4gICAgICBob3N0bmFtZSxcclxuICAgICAgcG9ydCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25uZWN0KSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdFRvRGV2aWNlKGRldikuc3Vic2NyaWJlKCk7IC8vIFRPRE86IFNob3cgJ25vdyBjb25uZWN0aW5nJyBtb2RhbCB3aW5kb3dcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxvYmplY3Q+KCcvbmV0Y29uZi9kZXZpY2UnLCB7ZGV2aWNlOiBkZXZ9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0VG9EZXZpY2UoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICduYW1lJzogZGV2aWNlLm5hbWUsXHJcbiAgICAgICdob3N0bmFtZSc6IGRldmljZS5ob3N0bmFtZSxcclxuICAgICAgJ3BvcnQnOiBkZXZpY2UucG9ydCxcclxuICAgICAgJ3VzZXJuYW1lJzogZGV2aWNlLnVzZXJuYW1lLFxyXG4gICAgICAncGFzc3dvcmQnOiBkZXZpY2UucGFzc3dvcmRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9uZXRjb25mL2Nvbm5lY3QnLCBib2R5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBpcyB4cGF0aCAoPylcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZXMoZmlsdGVyOiBhbnkpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==