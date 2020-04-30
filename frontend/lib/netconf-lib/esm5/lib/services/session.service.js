/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this._sessions = [];
        this.sessionsChanged = new EventEmitter();
        console.log('CONSTRUCTOR OF SESSION SERVICE CALLED');
    }
    Object.defineProperty(SessionService.prototype, "sessions", {
        get: /**
         * @return {?}
         */
        function () {
            console.log('Getting sessions');
            console.log(this._sessions);
            return this._sessions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log('Setting sessions');
            console.log(value);
            this._sessions = value;
            this.sessionsChanged.emit(value);
        },
        enumerable: true,
        configurable: true
    });
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
            /** @type {?} */
            var sessions = this.sessions;
            sessions.push({
                key: key, device: device
            });
            this.sessions = sessions;
        }
        else {
            /** @type {?} */
            var idx = this.findSessionIndex(key);
            this._sessions[idx].device = device;
            this.sessionsChanged.emit(this.sessions);
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
        return this.http.delete('/netconf/session/' + key)
            .pipe(tap((/**
         * @param {?} next
         * @return {?}
         */
        function (next) {
            _this._sessions.splice(idx, 1);
            _this.sessionsChanged.emit(_this.sessions);
        })));
    };
    /**
     * @return {?}
     */
    SessionService.prototype.loadOpenSessions = /**
     * @return {?}
     */
    function () {
        return this.http.get('/netconf/sessions');
    };
    /**
     * @return {?}
     */
    SessionService.prototype.destroyAllSessions = /**
     * @return {?}
     */
    function () {
        return this.http.delete('/netconf/sessions');
    };
    /**
     *  Check if session exists on the server.
     */
    /**
     *  Check if session exists on the server.
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.sessionAlive = /**
     *  Check if session exists on the server.
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
            for (var _b = tslib_1.__values(this._sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        return this._sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key === key; }));
    };
    /**
     * Filter is xpath (?)
     */
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    SessionService.prototype.getCompatibleDeviceSessions = /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        // TODO: Filter
        console.log('Getting compatible sessions');
        console.log(this.sessions);
        return this.sessions;
    };
    SessionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SessionService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SessionService.ngInjectableDef = i0.defineInjectable({ factory: function SessionService_Factory() { return new SessionService(i0.inject(i1.HttpClient)); }, token: SessionService, providedIn: "root" });
    return SessionService;
}());
export { SessionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype._sessions;
    /** @type {?} */
    SessionService.prototype.sessionsChanged;
    /** @type {?} */
    SessionService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUtoRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduQztJQWtCRSx3QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUkzQixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTNCLG9CQUFlLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFMOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFmRCxzQkFBSSxvQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUVELFVBQWEsS0FBZ0I7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BUEE7Ozs7OztJQWlCRCxtQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxNQUFjO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJB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dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi4vY2xhc3Nlcy9zZXNzaW9uJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XHJcblxyXG4gIGdldCBzZXNzaW9ucygpOiBTZXNzaW9uW10ge1xyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgc2Vzc2lvbnMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3Nlc3Npb25zKTtcclxuICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucztcclxuICB9XHJcblxyXG4gIHNldCBzZXNzaW9ucyh2YWx1ZTogU2Vzc2lvbltdKSB7XHJcbiAgICBjb25zb2xlLmxvZygnU2V0dGluZyBzZXNzaW9ucycpO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgdGhpcy5fc2Vzc2lvbnMgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2Vzc2lvbnNDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDT05TVFJVQ1RPUiBPRiBTRVNTSU9OIFNFUlZJQ0UgQ0FMTEVEJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXNzaW9uczogU2Vzc2lvbltdID0gW107XHJcblxyXG4gIHB1YmxpYyBzZXNzaW9uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTZXNzaW9uW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZXNzaW9uW10+KCk7XHJcblxyXG4gIGFkZFNlc3Npb24oa2V5OiBzdHJpbmcsIGRldmljZTogRGV2aWNlKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9lc1Nlc3Npb25FeGlzdHMoa2V5KSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9ucyA9IHRoaXMuc2Vzc2lvbnM7XHJcbiAgICAgIHNlc3Npb25zLnB1c2goe1xyXG4gICAgICAgIGtleSwgZGV2aWNlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmZpbmRTZXNzaW9uSW5kZXgoa2V5KTtcclxuICAgICAgdGhpcy5fc2Vzc2lvbnNbaWR4XS5kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICAgIHRoaXMuc2Vzc2lvbnNDaGFuZ2VkLmVtaXQodGhpcy5zZXNzaW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVzdHJveVNlc3Npb24oa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGlkeCA9IHRoaXMuZmluZFNlc3Npb25JbmRleChrZXkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9uZXRjb25mL3Nlc3Npb24vJyArIGtleSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKFxyXG4gICAgICAgICAgbmV4dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHRoaXMuc2Vzc2lvbnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGxvYWRPcGVuU2Vzc2lvbnMoKTogT2JzZXJ2YWJsZTxTZXNzaW9uW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFNlc3Npb25bXT4oJy9uZXRjb25mL3Nlc3Npb25zJyk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95QWxsU2Vzc2lvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL25ldGNvbmYvc2Vzc2lvbnMnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBvbiB0aGUgc2VydmVyLlxyXG4gICAqL1xyXG4gIHNlc3Npb25BbGl2ZShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPiB7XHJcbiAgICAvKmNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgna2V5Jywga2V5KTsqL1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8R2VuZXJpY1NlcnZlclJlc3BvbnNlPignL25ldGNvbmYvc2Vzc2lvbi9hbGl2ZS8nICsga2V5KTtcclxuICB9XHJcblxyXG5cclxuICBkb2VzU2Vzc2lvbkV4aXN0cyhrZXk6IHN0cmluZyk6IEJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBzZXNzaW9uIG9mIHRoaXMuX3Nlc3Npb25zKSB7XHJcbiAgICAgIGlmIChzZXNzaW9uLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZpbmRTZXNzaW9uSW5kZXgoa2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25zLmZpbmRJbmRleChzID0+IHMua2V5ID09PSBrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIGlzIHhwYXRoICg/KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDb21wYXRpYmxlRGV2aWNlU2Vzc2lvbnMoZmlsdGVyOiBhbnkpOiBTZXNzaW9uW10ge1xyXG4gICAgLy8gVE9ETzogRmlsdGVyXHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBjb21wYXRpYmxlIHNlc3Npb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlc3Npb25zKTtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25zO1xyXG4gIH1cclxuXHJcbn1cclxuIl19