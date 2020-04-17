/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {SocketService} from './socket.service';
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
            this.connectToDevice(dev).subscribe();
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
        // this.connectedDevices.push(device);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFJaEQ7SUFFRSx1QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVkzQixzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFbEMsNEJBQXVCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7SUFidEYsQ0FBQztJQUVELHNCQUFJLDJDQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBRUQsVUFBcUIsS0FBZTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BTEE7Ozs7SUFXTSwyQ0FBbUI7OztJQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSx1Q0FBZTs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7Ozs7SUFHTSxrQ0FBVTs7Ozs7Ozs7O0lBQWpCLFVBQWtCLFFBQWdCLEVBQ2hCLElBQVksRUFDWixRQUFnQixFQUNoQixVQUFlLEVBQ2YsUUFBYSxFQUNiLE9BQWU7UUFGZiwyQkFBQSxFQUFBLGVBQWU7UUFDZix5QkFBQSxFQUFBLGFBQWE7UUFDYix3QkFBQSxFQUFBLGVBQWU7O1lBQ3pCLEdBQUcsR0FBVztZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLEVBQUUsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxVQUFBO1lBQ1IsSUFBSSxNQUFBO1lBQ0osUUFBUSxVQUFBO1lBQ1IsUUFBUSxVQUFBO1NBQ1Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLGlCQUFpQixFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTSx1Q0FBZTs7OztJQUF0QixVQUF1QixNQUFjOzs7WUFFN0IsSUFBSSxHQUFHO1lBQ1gsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDbkIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSw0Q0FBb0I7Ozs7O0lBQTNCLFVBQTRCLE1BQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBbEVGLFVBQVU7OztnQkFKSCxVQUFVOztJQXdFbEIsb0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSxhQUFhOzs7Ozs7SUFheEIsMENBQXlDOztJQUV6QyxnREFBc0Y7O0lBZDFFLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuLy8gaW1wb3J0IHtTb2NrZXRTZXJ2aWNlfSBmcm9tICcuL3NvY2tldC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldmljZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBnZXQgY29ubmVjdGVkRGV2aWNlcygpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHNldCBjb25uZWN0ZWREZXZpY2VzKHZhbHVlOiBEZXZpY2VbXSkge1xyXG4gICAgdGhpcy5fY29ubmVjdGVkRGV2aWNlcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb25uZWN0ZWREZXZpY2VzQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Nvbm5lY3RlZERldmljZXM6IERldmljZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWREZXZpY2VzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPERldmljZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGV2aWNlW10+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXRDb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2F2ZWREZXZpY2VzKCk6IE9ic2VydmFibGU8RGV2aWNlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERldmljZVtdPignL25ldGNvbmYvZGV2aWNlcycpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzYXZlRGV2aWNlKGhvc3RuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlTmFtZSA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IGRldjogRGV2aWNlID0ge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgbmFtZTogZGV2aWNlTmFtZSxcclxuICAgICAgaG9zdG5hbWUsXHJcbiAgICAgIHBvcnQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29ubmVjdCkge1xyXG4gICAgICB0aGlzLmNvbm5lY3RUb0RldmljZShkZXYpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PG9iamVjdD4oJy9uZXRjb25mL2RldmljZScsIHtkZXZpY2U6IGRldn0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RUb0RldmljZShkZXZpY2U6IERldmljZSkge1xyXG4gICAgLy8gdGhpcy5jb25uZWN0ZWREZXZpY2VzLnB1c2goZGV2aWNlKTtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICduYW1lJzogZGV2aWNlLm5hbWUsXHJcbiAgICAgICdob3N0bmFtZSc6IGRldmljZS5ob3N0bmFtZSxcclxuICAgICAgJ3BvcnQnOiBkZXZpY2UucG9ydCxcclxuICAgICAgJ3VzZXJuYW1lJzogZGV2aWNlLnVzZXJuYW1lLFxyXG4gICAgICAncGFzc3dvcmQnOiBkZXZpY2UucGFzc3dvcmRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9uZXRjb25mL2Nvbm5lY3QnLCBib2R5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBpcyB4cGF0aCAoPylcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZXMoZmlsdGVyOiBhbnkpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19