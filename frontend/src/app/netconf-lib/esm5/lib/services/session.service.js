/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this._sessions = [];
        this.sessionsChanged = new EventEmitter();
    }
    Object.defineProperty(SessionService.prototype, "sessions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sessions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
     * Path is xpath.
     * For more information see https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     */
    /**
     * Path is xpath.
     * For more information see https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * @param {?} path
     * @return {?}
     */
    SessionService.prototype.getCompatibleDeviceSessions = /**
     * Path is xpath.
     * For more information see https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (this.sessions.length === 0) {
            return this.loadOpenSessions();
        }
        else {
            return of(this.sessions);
        }
    };
    /**
     * Format of path is described in detail here: https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * When no path is provided, the whole tree is requested
     */
    /**
     * Format of path is described in detail here: https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * When no path is provided, the whole tree is requested
     * @param {?} sessionKey
     * @param {?} recursive
     * @param {?=} path
     * @return {?}
     */
    SessionService.prototype.rpcGet = /**
     * Format of path is described in detail here: https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * When no path is provided, the whole tree is requested
     * @param {?} sessionKey
     * @param {?} recursive
     * @param {?=} path
     * @return {?}
     */
    function (sessionKey, recursive, path) {
        /** @type {?} */
        var params = new HttpParams()
            .append('key', sessionKey)
            .append('recursive', recursive ? 'true' : 'false');
        if (path) {
            params.append('path', path);
        }
        return this.http.get('/netconf/session/rpcGet', { params: params });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFJNUQsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduQztJQWNFLHdCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRzNCLGNBQVMsR0FBYyxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUpoRixDQUFDO0lBVkQsc0JBQUksb0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUVELFVBQWEsS0FBZ0I7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BTEE7Ozs7OztJQWNELG1DQUFVOzs7OztJQUFWLFVBQVcsR0FBVyxFQUFFLE1BQWM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNaLEdBQUcsS0FBQSxFQUFFLE1BQU0sUUFBQTthQUNaLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO2FB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LHlCQUF5QixFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQXpHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBVk8sVUFBVTs7O3lCQURsQjtDQW9IQyxBQTNHRCxJQTJHQztTQXhHWSxjQUFjOzs7Ozs7SUFjekIsbUNBQWtDOztJQUVsQyx5Q0FBZ0Y7O0lBTHBFLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XHJcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi4vY2xhc3Nlcy9zZXNzaW9uJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL2NsYXNzZXMvZGV2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7dGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xyXG5cclxuICBnZXQgc2Vzc2lvbnMoKTogU2Vzc2lvbltdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucztcclxuICB9XHJcblxyXG4gIHNldCBzZXNzaW9ucyh2YWx1ZTogU2Vzc2lvbltdKSB7XHJcbiAgICB0aGlzLl9zZXNzaW9ucyA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXNzaW9uc0NoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2Vzc2lvbnM6IFNlc3Npb25bXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgc2Vzc2lvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPigpO1xyXG5cclxuICBhZGRTZXNzaW9uKGtleTogc3RyaW5nLCBkZXZpY2U6IERldmljZSkge1xyXG4gICAgaWYgKCF0aGlzLmRvZXNTZXNzaW9uRXhpc3RzKGtleSkpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25zO1xyXG4gICAgICBzZXNzaW9ucy5wdXNoKHtcclxuICAgICAgICBrZXksIGRldmljZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXNzaW9ucyA9IHNlc3Npb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5maW5kU2Vzc2lvbkluZGV4KGtleSk7XHJcbiAgICAgIHRoaXMuX3Nlc3Npb25zW2lkeF0uZGV2aWNlID0gZGV2aWNlO1xyXG4gICAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHRoaXMuc2Vzc2lvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGRlc3Ryb3lTZXNzaW9uKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbmRTZXNzaW9uSW5kZXgoa2V5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvbmV0Y29uZi9zZXNzaW9uLycgKyBrZXkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChcclxuICAgICAgICAgIG5leHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9ucy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uc0NoYW5nZWQuZW1pdCh0aGlzLnNlc3Npb25zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2FkT3BlblNlc3Npb25zKCk6IE9ic2VydmFibGU8U2Vzc2lvbltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTZXNzaW9uW10+KCcvbmV0Y29uZi9zZXNzaW9ucycpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUFsbFNlc3Npb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9uZXRjb25mL3Nlc3Npb25zJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgb24gdGhlIHNlcnZlci5cclxuICAgKi9cclxuICBzZXNzaW9uQWxpdmUoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4ge1xyXG4gICAgLypjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXHJcbiAgICAgIC5hcHBlbmQoJ2tleScsIGtleSk7Ki9cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4oJy9uZXRjb25mL3Nlc3Npb24vYWxpdmUvJyArIGtleSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZG9lc1Nlc3Npb25FeGlzdHMoa2V5OiBzdHJpbmcpOiBCb29sZWFuIHtcclxuICAgIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiB0aGlzLl9zZXNzaW9ucykge1xyXG4gICAgICBpZiAoc2Vzc2lvbi5rZXkgPT09IGtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmaW5kU2Vzc2lvbkluZGV4KGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucy5maW5kSW5kZXgocyA9PiBzLmtleSA9PT0ga2V5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdGggaXMgeHBhdGguXHJcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbmV0b3BlZXIubGliZXJvdXRlci5vcmcvZG9jL2xpYnlhbmcvZGV2ZWwvaG93dG94cGF0aC5odG1sXHJcbiAgICovXHJcbiAgcHVibGljIGdldENvbXBhdGlibGVEZXZpY2VTZXNzaW9ucyhwYXRoOiBhbnkpOiBPYnNlcnZhYmxlPFNlc3Npb25bXT4ge1xyXG4gICAgaWYgKHRoaXMuc2Vzc2lvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvYWRPcGVuU2Vzc2lvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLnNlc3Npb25zKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgb2YgcGF0aCBpcyBkZXNjcmliZWQgaW4gZGV0YWlsIGhlcmU6IGh0dHBzOi8vbmV0b3BlZXIubGliZXJvdXRlci5vcmcvZG9jL2xpYnlhbmcvZGV2ZWwvaG93dG94cGF0aC5odG1sXHJcbiAgICogV2hlbiBubyBwYXRoIGlzIHByb3ZpZGVkLCB0aGUgd2hvbGUgdHJlZSBpcyByZXF1ZXN0ZWRcclxuICAgKi9cclxuICBwdWJsaWMgcnBjR2V0KHNlc3Npb25LZXk6IHN0cmluZywgcmVjdXJzaXZlOiBib29sZWFuLCBwYXRoPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXHJcbiAgICAgIC5hcHBlbmQoJ2tleScsIHNlc3Npb25LZXkpXHJcbiAgICAgIC5hcHBlbmQoJ3JlY3Vyc2l2ZScsIHJlY3Vyc2l2ZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgcGFyYW1zLmFwcGVuZCgncGF0aCcsIHBhdGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9uZXRjb25mL3Nlc3Npb24vcnBjR2V0Jywge3BhcmFtc30pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19