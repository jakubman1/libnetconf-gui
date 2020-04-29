/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from './device.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./device.service";
export class SessionService {
    /**
     * @param {?} http
     * @param {?} deviceService
     */
    constructor(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.sessions = [];
    }
    /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    addSession(key, device) {
        if (!this.doesSessionExists(key)) {
            this.sessions.push({
                key, device
            });
        }
        else {
            /** @type {?} */
            const idx = this.findSessionIndex(key);
            this.sessions[idx].device = device;
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    destroySession(key) {
        /** @type {?} */
        const idx = this.findSessionIndex(key);
        this.deviceService.disconnectDevice(this.sessions[idx].device).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.sessions.splice(idx, 1);
        }));
    }
    /**
     *  Check if session exists.
     * @param {?} key
     * @return {?}
     */
    sessionAlive(key) {
        /*const params = new HttpParams()
          .append('key', key);*/
        return this.http.get('/netconf/session/alive/' + key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    doesSessionExists(key) {
        for (const session of this.sessions) {
            if (session.key === key) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    findSessionIndex(key) {
        return this.sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key === key));
    }
}
SessionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SessionService.ctorParameters = () => [
    { type: HttpClient },
    { type: DeviceService }
];
/** @nocollapse */ SessionService.ngInjectableDef = i0.defineInjectable({ factory: function SessionService_Factory() { return new SessionService(i0.inject(i1.HttpClient), i0.inject(i2.DeviceService)); }, token: SessionService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SessionService.prototype.sessions;
    /** @type {?} */
    SessionService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUEwQixNQUFNLHNCQUFzQixDQUFDO0FBSXpFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU8vQyxNQUFNOzs7OztJQUVKLFlBQW1CLElBQWdCLEVBQVUsYUFBNEI7UUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBR3pFLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFGekIsQ0FBQzs7Ozs7O0lBSUQsVUFBVSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLEdBQUcsRUFBRSxNQUFNO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7YUFBTTs7a0JBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxjQUFjLENBQUMsR0FBVzs7Y0FDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDdEUsQ0FBQyxDQUFDLEVBQUU7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUNGLENBQUM7SUFFSixDQUFDOzs7Ozs7SUFLRCxZQUFZLENBQUMsR0FBVztRQUN0QjtnQ0FDd0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IseUJBQXlCLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBVztRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUF0REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFWTyxVQUFVO1lBSVYsYUFBYTs7Ozs7SUFZbkIsa0NBQXlCOztJQUhiLDhCQUF1Qjs7Ozs7SUFBRSx1Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHZW5lcmljU2VydmVyUmVzcG9uc2V9IGZyb20gJy4uL2NsYXNzZXMvR2VuZXJpY1NlcnZlclJlc3BvbnNlJztcclxuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uL2NsYXNzZXMvc2Vzc2lvbic7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7RGV2aWNlU2VydmljZX0gZnJvbSAnLi9kZXZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBzZXNzaW9uczogU2Vzc2lvbltdID0gW107XHJcblxyXG4gIGFkZFNlc3Npb24oa2V5OiBzdHJpbmcsIGRldmljZTogRGV2aWNlKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9lc1Nlc3Npb25FeGlzdHMoa2V5KSkge1xyXG4gICAgICB0aGlzLnNlc3Npb25zLnB1c2goe1xyXG4gICAgICAgIGtleSwgZGV2aWNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5maW5kU2Vzc2lvbkluZGV4KGtleSk7XHJcbiAgICAgIHRoaXMuc2Vzc2lvbnNbaWR4XS5kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGRlc3Ryb3lTZXNzaW9uKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbmRTZXNzaW9uSW5kZXgoa2V5KTtcclxuICAgIHRoaXMuZGV2aWNlU2VydmljZS5kaXNjb25uZWN0RGV2aWNlKHRoaXMuc2Vzc2lvbnNbaWR4XS5kZXZpY2UpLnN1YnNjcmliZShcclxuICAgICAgXyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9ucy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMuXHJcbiAgICovXHJcbiAgc2Vzc2lvbkFsaXZlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHZW5lcmljU2VydmVyUmVzcG9uc2U+IHtcclxuICAgIC8qY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxyXG4gICAgICAuYXBwZW5kKCdrZXknLCBrZXkpOyovXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxHZW5lcmljU2VydmVyUmVzcG9uc2U+KCcvbmV0Y29uZi9zZXNzaW9uL2FsaXZlLycgKyBrZXkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGRvZXNTZXNzaW9uRXhpc3RzKGtleTogc3RyaW5nKTogQm9vbGVhbiB7XHJcbiAgICBmb3IgKGNvbnN0IHNlc3Npb24gb2YgdGhpcy5zZXNzaW9ucykge1xyXG4gICAgICBpZiAoc2Vzc2lvbi5rZXkgPT09IGtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmaW5kU2Vzc2lvbkluZGV4KGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25zLmZpbmRJbmRleChzID0+IHMua2V5ID09PSBrZXkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19