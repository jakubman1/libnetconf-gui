/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
// import {SocketService} from './socket.service';
var DeviceService = /** @class */ (function () {
    // import {SocketService} from './socket.service';
    function DeviceService() {
        this._connectedDevices = [
            {
                fingerprint: '',
                id: 1,
                name: 'Test device',
                hostname: 'localhost',
                port: 883,
                username: 'admin',
                password: '',
            },
            {
                fingerprint: '',
                id: 2,
                name: 'Test device 2',
                hostname: 'localhost',
                port: 883,
                username: 'user',
                password: '',
            },
            {
                fingerprint: '',
                id: 3,
                name: '',
                hostname: 'localhost',
                port: 888,
                username: 'user',
                password: '',
            },
            {
                fingerprint: '',
                id: 4,
                name: 'Example server',
                hostname: 'example.com',
                port: 25565,
                username: 'admin',
                password: '',
            },
            {
                fingerprint: '',
                id: 5,
                name: 'Example server',
                hostname: 'example.com',
                port: 4201,
                username: 'user',
                password: '',
            },
            {
                fingerprint: '',
                id: 6,
                name: '',
                hostname: 'example.com',
                port: 4200,
                username: 'user',
                password: '',
            }
        ];
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
        return of(this.connectedDevices);
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
            id: -1,
            name: deviceName,
            hostname: hostname,
            port: port,
            username: username,
            password: password
        };
        if (connect) {
            this.connectToDevice(dev);
        }
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
        this.connectedDevices.push(device);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DeviceService.ngInjectableDef = i0.defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(); }, token: DeviceService, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7OztBQUdwQztJQUZBLGtEQUFrRDtJQUVsRDtRQWFVLHNCQUFpQixHQUFhO1lBQ3BDO2dCQUNFLFdBQVcsRUFBRSxFQUFFO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsZUFBZTtnQkFDckIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxHQUFHO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxHQUFHO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTthQUNiO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTthQUNiO1NBQUMsQ0FBQztRQUVFLDRCQUF1QixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO0tBMEN2RjtJQTNHQyxzQkFBSSwyQ0FBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUVELFVBQXFCLEtBQWU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUxBOzs7O0lBaUVNLDJDQUFtQjs7O0lBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLHVDQUFlOzs7SUFBdEI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7Ozs7O0lBRU0sa0NBQVU7Ozs7Ozs7OztJQUFqQixVQUFrQixRQUFnQixFQUNoQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsVUFBZSxFQUNmLFFBQWEsRUFDYixPQUFlO1FBRmYsMkJBQUEsRUFBQSxlQUFlO1FBQ2YseUJBQUEsRUFBQSxhQUFhO1FBQ2Isd0JBQUEsRUFBQSxlQUFlOztZQUN6QixHQUFHLEdBQVc7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ04sSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxVQUFBO1lBQ1IsSUFBSSxNQUFBO1lBQ0osUUFBUSxVQUFBO1lBQ1IsUUFBUSxVQUFBO1NBQ1Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVNLHVDQUFlOzs7O0lBQXRCLFVBQXVCLE1BQWM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLDRDQUFvQjs7Ozs7SUFBM0IsVUFBNEIsTUFBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOztnQkE3R0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3dCQVBEO0NBb0hDLEFBL0dELElBK0dDO1NBNUdZLGFBQWE7Ozs7OztJQVV4QiwwQ0FzREs7O0lBRUwsZ0RBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0IHtTb2NrZXRTZXJ2aWNlfSBmcm9tICcuL3NvY2tldC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERldmljZVNlcnZpY2Uge1xyXG4gIGdldCBjb25uZWN0ZWREZXZpY2VzKCk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbm5lY3RlZERldmljZXModmFsdWU6IERldmljZVtdKSB7XHJcbiAgICB0aGlzLl9jb25uZWN0ZWREZXZpY2VzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXNDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29ubmVjdGVkRGV2aWNlczogRGV2aWNlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdUZXN0IGRldmljZScsXHJcbiAgICAgIGhvc3RuYW1lOiAnbG9jYWxob3N0JyxcclxuICAgICAgcG9ydDogODgzLFxyXG4gICAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogJ1Rlc3QgZGV2aWNlIDInLFxyXG4gICAgICBob3N0bmFtZTogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHBvcnQ6IDg4MyxcclxuICAgICAgdXNlcm5hbWU6ICd1c2VyJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogMyxcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGhvc3RuYW1lOiAnbG9jYWxob3N0JyxcclxuICAgICAgcG9ydDogODg4LFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiAnRXhhbXBsZSBzZXJ2ZXInLFxyXG4gICAgICBob3N0bmFtZTogJ2V4YW1wbGUuY29tJyxcclxuICAgICAgcG9ydDogMjU1NjUsXHJcbiAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICBuYW1lOiAnRXhhbXBsZSBzZXJ2ZXInLFxyXG4gICAgICBob3N0bmFtZTogJ2V4YW1wbGUuY29tJyxcclxuICAgICAgcG9ydDogNDIwMSxcclxuICAgICAgdXNlcm5hbWU6ICd1c2VyJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGhvc3RuYW1lOiAnZXhhbXBsZS5jb20nLFxyXG4gICAgICBwb3J0OiA0MjAwLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9XTtcclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZERldmljZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RGV2aWNlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4oKTtcclxuXHJcbiAgcHVibGljIGdldENvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTYXZlZERldmljZXMoKTogT2JzZXJ2YWJsZTxEZXZpY2VbXT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuY29ubmVjdGVkRGV2aWNlcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2F2ZURldmljZShob3N0bmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldmljZU5hbWUgPSAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3QgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZGV2OiBEZXZpY2UgPSB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6IC0xLFxyXG4gICAgICBuYW1lOiBkZXZpY2VOYW1lLFxyXG4gICAgICBob3N0bmFtZSxcclxuICAgICAgcG9ydCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25uZWN0KSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdFRvRGV2aWNlKGRldik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdFRvRGV2aWNlKGRldmljZTogRGV2aWNlKSB7XHJcbiAgICB0aGlzLmNvbm5lY3RlZERldmljZXMucHVzaChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIGlzIHhwYXRoICg/KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDb21wYXRpYmxlRGV2aWNlcyhmaWx0ZXI6IGFueSk6IERldmljZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=