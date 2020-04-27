/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/socket.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import * as i0 from "@angular/core";
export class SocketService {
    constructor() {
        console.log('initSocket ' + window.location.origin);
        this.socket = socketIo.io(window.location.origin);
    }
    /**
     * @param {?} event
     * @param {?=} message
     * @return {?}
     */
    send(event, message = null) {
        if (message) {
            this.socket.emit(event, message);
        }
        else {
            this.socket.emit(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    subscribe(event) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            this.socket.on(event, (/**
             * @param {?} data
             * @return {?}
             */
            (data) => observer.next(data)));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    unsubscribe(event) {
        this.socket.removeListener(event);
    }
}
SocketService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SocketService.ctorParameters = () => [];
/** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(); }, token: SocketService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SocketService.prototype.socket;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDOztBQUs3QyxNQUFNO0lBR0o7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxLQUFhLEVBQUUsVUFBZSxJQUFJO1FBQ3JDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBTSxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7O1lBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7O0lBRUMsK0JBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCAqIGFzIHNvY2tldElvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzb2NrZXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2luaXRTb2NrZXQgJyArIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRJby5pbyh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuICB9XHJcblxyXG4gIHNlbmQoZXZlbnQ6IHN0cmluZywgbWVzc2FnZTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5zb2NrZXQuZW1pdChldmVudCwgbWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnNjcmliZShldmVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55PihvYnNlcnZlciA9PiB7XHJcbiAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCAoZGF0YSkgPT4gb2JzZXJ2ZXIubmV4dChkYXRhKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19