/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {SocketService} from './socket.service';
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
            id: -1,
            name: deviceName,
            hostname,
            port,
            username,
            password
        };
        if (connect) {
            this.connectToDevice(dev);
        }
        return this.http.post('/netconf/device', { device: dev });
    }
    /**
     * @param {?} device
     * @return {?}
     */
    connectToDevice(device) {
        this.connectedDevices.push(device);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFJaEQsTUFBTTs7OztJQUNKLFlBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFXM0Isc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRWxDLDRCQUF1QixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO0lBYmhELENBQUM7Ozs7SUFFdkMsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQWU7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFNTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7Ozs7SUFHTSxVQUFVLENBQUMsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFVBQVUsR0FBRyxFQUFFLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixPQUFPLEdBQUcsS0FBSzs7Y0FDekIsR0FBRyxHQUFXO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNOLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVE7WUFDUixJQUFJO1lBQ0osUUFBUTtZQUNSLFFBQVE7U0FDVDtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBS00sb0JBQW9CLENBQUMsTUFBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7WUF6REYsVUFBVTs7O1lBSEgsVUFBVTs7Ozs7OztJQWdCaEIsMENBQXlDOztJQUV6QyxnREFBc0Y7O0lBYjFFLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBpbXBvcnQge1NvY2tldFNlcnZpY2V9IGZyb20gJy4vc29ja2V0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGdldCBjb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbm5lY3RlZERldmljZXModmFsdWU6IERldmljZVtdKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0ZWREZXZpY2VzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXNDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29ubmVjdGVkRGV2aWNlczogRGV2aWNlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZERldmljZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RGV2aWNlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4oKTtcclxuXHJcbiAgcHVibGljIGdldENvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTYXZlZERldmljZXMoKTogT2JzZXJ2YWJsZTxEZXZpY2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV2aWNlW10+KCcvbmV0Y29uZi9kZXZpY2VzJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNhdmVEZXZpY2UoaG9zdG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VOYW1lID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ID0gZmFsc2UpOiBPYnNlcnZhYmxlPG9iamVjdD4ge1xyXG4gICAgY29uc3QgZGV2OiBEZXZpY2UgPSB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6IC0xLFxyXG4gICAgICBuYW1lOiBkZXZpY2VOYW1lLFxyXG4gICAgICBob3N0bmFtZSxcclxuICAgICAgcG9ydCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25uZWN0KSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdFRvRGV2aWNlKGRldik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8b2JqZWN0PignL25ldGNvbmYvZGV2aWNlJywge2RldmljZTogZGV2fSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdFRvRGV2aWNlKGRldmljZTogRGV2aWNlKSB7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXMucHVzaChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIGlzIHhwYXRoICg/KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDb21wYXRpYmxlRGV2aWNlcyhmaWx0ZXI6IGFueSk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=