/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
// import {SocketService} from './socket.service';
export class DeviceService {
    // import {SocketService} from './socket.service';
    constructor() {
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
        return of(this.connectedDevices);
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DeviceService.ngInjectableDef = i0.defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(); }, token: DeviceService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype._connectedDevices;
    /** @type {?} */
    DeviceService.prototype.connectedDevicesChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7OztBQU1wQyxNQUFNO0lBTE4sa0RBQWtEO0lBRWxEO1FBYVUsc0JBQWlCLEdBQWE7WUFDcEM7Z0JBQ0UsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsR0FBRztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxFQUFFO2dCQUNmLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxlQUFlO2dCQUNyQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FBQyxDQUFDO1FBRUUsNEJBQXVCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7S0EwQ3ZGOzs7O0lBM0dDLElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFlO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBNERNLG1CQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sZUFBZTtRQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7Ozs7O0lBRU0sVUFBVSxDQUFDLFFBQWdCLEVBQ2hCLElBQVksRUFDWixRQUFnQixFQUNoQixVQUFVLEdBQUcsRUFBRSxFQUNmLFFBQVEsR0FBRyxFQUFFLEVBQ2IsT0FBTyxHQUFHLEtBQUs7O2NBQ3pCLEdBQUcsR0FBVztZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDTixJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRO1lBQ1IsSUFBSTtZQUNKLFFBQVE7WUFDUixRQUFRO1NBQ1Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBS00sb0JBQW9CLENBQUMsTUFBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7WUE3R0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQVdDLDBDQXNESzs7SUFFTCxnREFBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQge1NvY2tldFNlcnZpY2V9IGZyb20gJy4vc29ja2V0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU2VydmljZSB7XHJcbiAgZ2V0IGNvbm5lY3RlZERldmljZXMoKTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZERldmljZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgY29ubmVjdGVkRGV2aWNlcyh2YWx1ZTogRGV2aWNlW10pIHtcclxuICAgIHRoaXMuX2Nvbm5lY3RlZERldmljZXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb25uZWN0ZWREZXZpY2VzOiBEZXZpY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ1Rlc3QgZGV2aWNlJyxcclxuICAgICAgaG9zdG5hbWU6ICdsb2NhbGhvc3QnLFxyXG4gICAgICBwb3J0OiA4ODMsXHJcbiAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnVGVzdCBkZXZpY2UgMicsXHJcbiAgICAgIGhvc3RuYW1lOiAnbG9jYWxob3N0JyxcclxuICAgICAgcG9ydDogODgzLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgaG9zdG5hbWU6ICdsb2NhbGhvc3QnLFxyXG4gICAgICBwb3J0OiA4ODgsXHJcbiAgICAgIHVzZXJuYW1lOiAndXNlcicsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6ICdFeGFtcGxlIHNlcnZlcicsXHJcbiAgICAgIGhvc3RuYW1lOiAnZXhhbXBsZS5jb20nLFxyXG4gICAgICBwb3J0OiAyNTU2NSxcclxuICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbmdlcnByaW50OiAnJyxcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIG5hbWU6ICdFeGFtcGxlIHNlcnZlcicsXHJcbiAgICAgIGhvc3RuYW1lOiAnZXhhbXBsZS5jb20nLFxyXG4gICAgICBwb3J0OiA0MjAxLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaW5nZXJwcmludDogJycsXHJcbiAgICAgIGlkOiA2LFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgaG9zdG5hbWU6ICdleGFtcGxlLmNvbScsXHJcbiAgICAgIHBvcnQ6IDQyMDAsXHJcbiAgICAgIHVzZXJuYW1lOiAndXNlcicsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH1dO1xyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkRGV2aWNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxEZXZpY2VbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERldmljZVtdPigpO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29ubmVjdGVkRGV2aWNlcygpOiBEZXZpY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWREZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNhdmVkRGV2aWNlcygpOiBPYnNlcnZhYmxlPERldmljZVtdPiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5jb25uZWN0ZWREZXZpY2VzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlRGV2aWNlKGhvc3RuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlTmFtZSA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBkZXY6IERldmljZSA9IHtcclxuICAgICAgZmluZ2VycHJpbnQ6ICcnLFxyXG4gICAgICBpZDogLTEsXHJcbiAgICAgIG5hbWU6IGRldmljZU5hbWUsXHJcbiAgICAgIGhvc3RuYW1lLFxyXG4gICAgICBwb3J0LFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGNvbm5lY3QpIHtcclxuICAgICAgdGhpcy5jb25uZWN0VG9EZXZpY2UoZGV2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0VG9EZXZpY2UoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIHRoaXMuY29ubmVjdGVkRGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXIgaXMgeHBhdGggKD8pXHJcbiAgICovXHJcbiAgcHVibGljIGdldENvbXBhdGlibGVEZXZpY2VzKGZpbHRlcjogYW55KTogRGV2aWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGVkRGV2aWNlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==