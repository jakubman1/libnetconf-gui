/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/socket.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
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
    { type: Injectable }
];
SocketService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SocketService.prototype.socket;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXRjb25mLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRzdDLE1BQU07SUFHSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxVQUFlLElBQUk7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLElBQUksVUFBVTs7OztRQUFNLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUs7Ozs7WUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF6QkYsVUFBVTs7Ozs7Ozs7SUFFVCwrQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0ICogYXMgc29ja2V0SW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNvY2tldDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW5pdFNvY2tldCAnICsgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldElvLmlvKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gIH1cclxuXHJcbiAgc2VuZChldmVudDogc3RyaW5nLCBtZXNzYWdlOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KGV2ZW50LCBtZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KG9ic2VydmVyID0+IHtcclxuICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIChkYXRhKSA9PiBvYnNlcnZlci5uZXh0KGRhdGEpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmUoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb2NrZXQucmVtb3ZlTGlzdGVuZXIoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=