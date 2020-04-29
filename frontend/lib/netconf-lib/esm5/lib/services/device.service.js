/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
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
    /**
     * @param {?} device
     * @return {?}
     */
    DeviceService.prototype.disconnectDevice = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        return of(null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBSWhEO0lBRUUsdUJBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFZM0Isc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRWxDLDRCQUF1QixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO0lBYnRGLENBQUM7SUFFRCxzQkFBSSwyQ0FBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUVELFVBQXFCLEtBQWU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUxBOzs7O0lBV00sMkNBQW1COzs7SUFBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sdUNBQWU7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7Ozs7O0lBR00sa0NBQVU7Ozs7Ozs7OztJQUFqQixVQUFrQixRQUFnQixFQUNoQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsVUFBZSxFQUNmLFFBQWEsRUFDYixPQUFlO1FBRmYsMkJBQUEsRUFBQSxlQUFlO1FBQ2YseUJBQUEsRUFBQSxhQUFhO1FBQ2Isd0JBQUEsRUFBQSxlQUFlOztZQUN6QixHQUFHLEdBQVc7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsVUFBQTtZQUNSLElBQUksTUFBQTtZQUNKLFFBQVEsVUFBQTtZQUNSLFFBQVEsVUFBQTtTQUNUO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRU0sdUNBQWU7Ozs7SUFBdEIsVUFBdUIsTUFBYzs7O1lBRTdCLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksNENBQW9COzs7OztJQUEzQixVQUE0QixNQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsd0NBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQWM7UUFDN0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Z0JBdEVGLFVBQVU7OztnQkFKSCxVQUFVOztJQTRFbEIsb0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXZFWSxhQUFhOzs7Ozs7SUFheEIsMENBQXlDOztJQUV6QyxnREFBc0Y7O0lBZDFFLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dlbmVyaWNTZXJ2ZXJSZXNwb25zZX0gZnJvbSAnLi4vY2xhc3Nlcy9HZW5lcmljU2VydmVyUmVzcG9uc2UnO1xyXG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4uL2NsYXNzZXMvc2Vzc2lvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgY29ubmVjdGVkRGV2aWNlcyh2YWx1ZTogRGV2aWNlW10pIHtcclxuICAgIHRoaXMuX2Nvbm5lY3RlZERldmljZXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb25uZWN0ZWREZXZpY2VzOiBEZXZpY2VbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERldmljZVtdPigpO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29ubmVjdGVkRGV2aWNlcygpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNhdmVkRGV2aWNlcygpOiBPYnNlcnZhYmxlPERldmljZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXZpY2VbXT4oJy9uZXRjb25mL2RldmljZXMnKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2F2ZURldmljZShob3N0bmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldmljZU5hbWUgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3QgPSBmYWxzZSk6IE9ic2VydmFibGU8b2JqZWN0PiB7XHJcbiAgICBjb25zdCBkZXY6IERldmljZSA9IHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogJycsXHJcbiAgICAgIG5hbWU6IGRldmljZU5hbWUsXHJcbiAgICAgIGhvc3RuYW1lLFxyXG4gICAgICBwb3J0LFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGNvbm5lY3QpIHtcclxuICAgICAgdGhpcy5jb25uZWN0VG9EZXZpY2UoZGV2KS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxvYmplY3Q+KCcvbmV0Y29uZi9kZXZpY2UnLCB7ZGV2aWNlOiBkZXZ9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0VG9EZXZpY2UoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIC8vIHRoaXMuY29ubmVjdGVkRGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAnbmFtZSc6IGRldmljZS5uYW1lLFxyXG4gICAgICAnaG9zdG5hbWUnOiBkZXZpY2UuaG9zdG5hbWUsXHJcbiAgICAgICdwb3J0JzogZGV2aWNlLnBvcnQsXHJcbiAgICAgICd1c2VybmFtZSc6IGRldmljZS51c2VybmFtZSxcclxuICAgICAgJ3Bhc3N3b3JkJzogZGV2aWNlLnBhc3N3b3JkXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvbmV0Y29uZi9jb25uZWN0JywgYm9keSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXIgaXMgeHBhdGggKD8pXHJcbiAgICovXHJcbiAgcHVibGljIGdldENvbXBhdGlibGVEZXZpY2VzKGZpbHRlcjogYW55KTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3REZXZpY2UoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIHJldHVybiBvZihudWxsKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==