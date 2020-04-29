/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from './device.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./device.service";
var SessionService = /** @class */ (function () {
    function SessionService(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.sessions = [];
    }
    /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    SessionService.prototype.addSession = /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    function (key, device) {
        if (!this.doesSessionExists(key)) {
            this.sessions.push({
                key: key, device: device
            });
        }
        else {
            /** @type {?} */
            var idx = this.findSessionIndex(key);
            this.sessions[idx].device = device;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.destroySession = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        /** @type {?} */
        var idx = this.findSessionIndex(key);
        this.deviceService.disconnectDevice(this.sessions[idx].device).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.sessions.splice(idx, 1);
        }));
    };
    /**
     *  Check if session exists.
     */
    /**
     *  Check if session exists.
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.sessionAlive = /**
     *  Check if session exists.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /*const params = new HttpParams()
          .append('key', key);*/
        return this.http.get('/netconf/session/alive/' + key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.doesSessionExists = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var session = _c.value;
                if (session.key === key) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.findSessionIndex = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key === key; }));
    };
    SessionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SessionService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DeviceService }
    ]; };
    /** @nocollapse */ SessionService.ngInjectableDef = i0.defineInjectable({ factory: function SessionService_Factory() { return new SessionService(i0.inject(i1.HttpClient), i0.inject(i2.DeviceService)); }, token: SessionService, providedIn: "root" });
    return SessionService;
}());
export { SessionService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBZSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUl6RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFJL0M7SUFLRSx3QkFBbUIsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFHekUsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUZ6QixDQUFDOzs7Ozs7SUFJRCxtQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxNQUFjO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLEdBQUcsS0FBQSxFQUFFLE1BQU0sUUFBQTthQUNaLENBQUMsQ0FBQztTQUNKO2FBQU07O2dCQUNDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBSUQsdUNBQWM7Ozs7SUFBZCxVQUFlLEdBQVc7UUFBMUIsaUJBUUM7O1lBUE8sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDdEUsVUFBQSxDQUFDO1lBQ0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFDRixDQUFDO0lBRUosQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxxQ0FBWTs7Ozs7SUFBWixVQUFhLEdBQVc7UUFDdEI7Z0NBQ3dCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBR0QsMENBQWlCOzs7O0lBQWpCLFVBQWtCLEdBQVc7OztZQUMzQixLQUFzQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBaEMsSUFBTSxPQUFPLFdBQUE7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7b0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCx5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsR0FBVztRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFWTyxVQUFVO2dCQUlWLGFBQWE7Ozt5QkFMckI7Q0FpRUMsQUF4REQsSUF3REM7U0FyRFksY0FBYzs7O0lBS3pCLGtDQUF5Qjs7SUFIYiw4QkFBdUI7Ozs7O0lBQUUsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi9jbGFzc2VzL3Nlc3Npb24nO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge0RldmljZVNlcnZpY2V9IGZyb20gJy4vZGV2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgc2Vzc2lvbnM6IFNlc3Npb25bXSA9IFtdO1xyXG5cclxuICBhZGRTZXNzaW9uKGtleTogc3RyaW5nLCBkZXZpY2U6IERldmljZSkge1xyXG4gICAgaWYgKCF0aGlzLmRvZXNTZXNzaW9uRXhpc3RzKGtleSkpIHtcclxuICAgICAgdGhpcy5zZXNzaW9ucy5wdXNoKHtcclxuICAgICAgICBrZXksIGRldmljZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZmluZFNlc3Npb25JbmRleChrZXkpO1xyXG4gICAgICB0aGlzLnNlc3Npb25zW2lkeF0uZGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBkZXN0cm95U2Vzc2lvbihrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgaWR4ID0gdGhpcy5maW5kU2Vzc2lvbkluZGV4KGtleSk7XHJcbiAgICB0aGlzLmRldmljZVNlcnZpY2UuZGlzY29ubmVjdERldmljZSh0aGlzLnNlc3Npb25zW2lkeF0uZGV2aWNlKS5zdWJzY3JpYmUoXHJcbiAgICAgIF8gPT4ge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzLlxyXG4gICAqL1xyXG4gIHNlc3Npb25BbGl2ZShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPiB7XHJcbiAgICAvKmNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgna2V5Jywga2V5KTsqL1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8R2VuZXJpY1NlcnZlclJlc3BvbnNlPignL25ldGNvbmYvc2Vzc2lvbi9hbGl2ZS8nICsga2V5KTtcclxuICB9XHJcblxyXG5cclxuICBkb2VzU2Vzc2lvbkV4aXN0cyhrZXk6IHN0cmluZyk6IEJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBzZXNzaW9uIG9mIHRoaXMuc2Vzc2lvbnMpIHtcclxuICAgICAgaWYgKHNlc3Npb24ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZmluZFNlc3Npb25JbmRleChrZXk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9ucy5maW5kSW5kZXgocyA9PiBzLmtleSA9PT0ga2V5KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==