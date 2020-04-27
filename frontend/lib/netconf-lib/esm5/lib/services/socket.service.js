/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/socket.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import * as i0 from "@angular/core";
var SocketService = /** @class */ (function () {
    function SocketService() {
        console.log('initSocket ' + window.location.origin);
        this.socket = socketIo.io(window.location.origin);
    }
    /**
     * @param {?} event
     * @param {?=} message
     * @return {?}
     */
    SocketService.prototype.send = /**
     * @param {?} event
     * @param {?=} message
     * @return {?}
     */
    function (event, message) {
        if (message === void 0) { message = null; }
        if (message) {
            this.socket.emit(event, message);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SocketService.prototype.subscribe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.socket.on(event, (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return observer.next(data); }));
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SocketService.prototype.unsubscribe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.socket.removeListener(event);
    };
    SocketService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SocketService.ctorParameters = function () { return []; };
    /** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(); }, token: SocketService, providedIn: "root" });
    return SocketService;
}());
export { SocketService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SocketService.prototype.socket;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDOztBQUU3QztJQU1FO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFRCw0QkFBSTs7Ozs7SUFBSixVQUFLLEtBQWEsRUFBRSxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLGNBQW1CO1FBQ3JDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFBdkIsaUJBSUM7UUFIQyxPQUFPLElBQUksVUFBVTs7OztRQUFNLFVBQUEsUUFBUTtZQUNqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7O1lBQUUsVUFBQyxJQUFJLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O3dCQVBEO0NBaUNDLEFBNUJELElBNEJDO1NBekJZLGFBQWE7Ozs7OztJQUN4QiwrQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0ICogYXMgc29ja2V0SW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNvY2tldDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW5pdFNvY2tldCAnICsgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldElvLmlvKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gIH1cclxuXHJcbiAgc2VuZChldmVudDogc3RyaW5nLCBtZXNzYWdlOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KG9ic2VydmVyID0+IHtcclxuICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIChkYXRhKSA9PiBvYnNlcnZlci5uZXh0KGRhdGEpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmUoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb2NrZXQucmVtb3ZlTGlzdGVuZXIoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=