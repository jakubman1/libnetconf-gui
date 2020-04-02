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
        this._connectedDevices = [{
                id: 1,
                name: 'Test',
                hostname: 'localhost',
                port: 830,
                username: 'admin',
                password: '',
                fingerprint: 'aaa',
            }];
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
        return this.http.post('/netconf/device', {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFJaEQsTUFBTTs7OztJQUNKLFlBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFXM0Isc0JBQWlCLEdBQWEsQ0FBQztnQkFDckMsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxHQUFHO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsRUFBRTtnQkFDWixXQUFXLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUM7UUFFSSw0QkFBdUIsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQXJCaEQsQ0FBQzs7OztJQUV2QyxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELElBQUksZ0JBQWdCLENBQUMsS0FBZTtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQWNNLG1CQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7OztJQUdNLFVBQVUsQ0FBQyxRQUFnQixFQUNoQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsVUFBVSxHQUFHLEVBQUUsRUFDZixRQUFRLEdBQUcsRUFBRSxFQUNiLE9BQU8sR0FBRyxLQUFLOztjQUN6QixHQUFHLEdBQVc7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ04sSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUTtZQUNSLElBQUk7WUFDSixRQUFRO1lBQ1IsUUFBUTtTQUNUO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBS00sb0JBQW9CLENBQUMsTUFBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7WUFqRUYsVUFBVTs7O1lBSEgsVUFBVTs7Ozs7OztJQWdCaEIsMENBUUc7O0lBRUgsZ0RBQXNGOztJQXJCMUUsNkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbi8vIGltcG9ydCB7U29ja2V0U2VydmljZX0gZnJvbSAnLi9zb2NrZXQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0IGNvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgY29ubmVjdGVkRGV2aWNlcyh2YWx1ZTogRGV2aWNlW10pIHtcclxuICAgIHRoaXMuX2Nvbm5lY3RlZERldmljZXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb25uZWN0ZWREZXZpY2VzOiBEZXZpY2VbXSA9IFt7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGhvc3RuYW1lOiAnbG9jYWxob3N0JyxcclxuICAgIHBvcnQ6IDgzMCxcclxuICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgZmluZ2VycHJpbnQ6ICdhYWEnLFxyXG4gIH1dO1xyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERldmljZVtdPigpO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29ubmVjdGVkRGV2aWNlcygpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNhdmVkRGV2aWNlcygpOiBPYnNlcnZhYmxlPERldmljZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXZpY2VbXT4oJy9uZXRjb25mL2RldmljZXMnKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2F2ZURldmljZShob3N0bmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldmljZU5hbWUgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3QgPSBmYWxzZSk6IE9ic2VydmFibGU8b2JqZWN0PiB7XHJcbiAgICBjb25zdCBkZXY6IERldmljZSA9IHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogLTEsXHJcbiAgICAgIG5hbWU6IGRldmljZU5hbWUsXHJcbiAgICAgIGhvc3RuYW1lLFxyXG4gICAgICBwb3J0LFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGNvbm5lY3QpIHtcclxuICAgICAgdGhpcy5jb25uZWN0VG9EZXZpY2UoZGV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxvYmplY3Q+KCcvbmV0Y29uZi9kZXZpY2UnLCB7fSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdFRvRGV2aWNlKGRldmljZTogRGV2aWNlKSB7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXMucHVzaChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIGlzIHhwYXRoICg/KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDb21wYXRpYmxlRGV2aWNlcyhmaWx0ZXI6IGFueSk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=