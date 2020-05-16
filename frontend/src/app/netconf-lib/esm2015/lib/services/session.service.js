/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SessionService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._sessions = [];
        this.sessionsChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get sessions() {
        return this._sessions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sessions(value) {
        this._sessions = value;
        this.sessionsChanged.emit(value);
    }
    /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    addSession(key, device) {
        if (!this.doesSessionExists(key)) {
            /** @type {?} */
            const sessions = this.sessions;
            sessions.push({
                key, device
            });
            this.sessions = sessions;
        }
        else {
            /** @type {?} */
            const idx = this.findSessionIndex(key);
            this._sessions[idx].device = device;
            this.sessionsChanged.emit(this.sessions);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    destroySession(key) {
        /** @type {?} */
        const idx = this.findSessionIndex(key);
        return this.http.delete('/netconf/session/' + key)
            .pipe(tap((/**
         * @param {?} next
         * @return {?}
         */
        next => {
            this._sessions.splice(idx, 1);
            this.sessionsChanged.emit(this.sessions);
        })));
    }
    /**
     * @return {?}
     */
    loadOpenSessions() {
        return this.http.get('/netconf/sessions');
    }
    /**
     * @return {?}
     */
    destroyAllSessions() {
        return this.http.delete('/netconf/sessions');
    }
    /**
     *  Check if session exists on the server.
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
        for (const session of this._sessions) {
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
        return this._sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key === key));
    }
    /**
     * Path is xpath.
     * For more information see https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * @param {?} path
     * @return {?}
     */
    getCompatibleDeviceSessions(path) {
        if (this.sessions.length === 0) {
            return this.loadOpenSessions();
        }
        else {
            return of(this.sessions);
        }
    }
    /**
     * Format of path is described in detail here: https://netopeer.liberouter.org/doc/libyang/devel/howtoxpath.html
     * When no path is provided, the whole tree is requested
     * @param {?} sessionKey
     * @param {?} recursive
     * @param {?=} path
     * @return {?}
     */
    rpcGet(sessionKey, recursive, path) {
        /** @type {?} */
        const params = new HttpParams()
            .append('key', sessionKey)
            .append('recursive', recursive ? 'true' : 'false');
        if (path) {
            params.append('path', path);
        }
        return this.http.get('/netconf/session/rpcGet', { params });
    }
}
SessionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SessionService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SessionService.ngInjectableDef = i0.defineInjectable({ factory: function SessionService_Factory() { return new SessionService(i0.inject(i1.HttpClient)); }, token: SessionService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUk1RCxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTW5DLE1BQU07Ozs7SUFXSixZQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRzNCLGNBQVMsR0FBYyxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUpoRixDQUFDOzs7O0lBVkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBZ0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBU0QsVUFBVSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUU7O2tCQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixHQUFHLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO2FBQU07O2tCQUNDLEdBQUcsR0FB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IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtHZW5lcmljU2VydmVyUmVzcG9uc2V9IGZyb20gJy4uL2NsYXNzZXMvR2VuZXJpY1NlcnZlclJlc3BvbnNlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi9jbGFzc2VzL3Nlc3Npb24nO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XHJcblxyXG4gIGdldCBzZXNzaW9ucygpOiBTZXNzaW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlc3Npb25zKHZhbHVlOiBTZXNzaW9uW10pIHtcclxuICAgIHRoaXMuX3Nlc3Npb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXNzaW9uczogU2Vzc2lvbltdID0gW107XHJcblxyXG4gIHB1YmxpYyBzZXNzaW9uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTZXNzaW9uW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZXNzaW9uW10+KCk7XHJcblxyXG4gIGFkZFNlc3Npb24oa2V5OiBzdHJpbmcsIGRldmljZTogRGV2aWNlKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9lc1Nlc3Npb25FeGlzdHMoa2V5KSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9ucyA9IHRoaXMuc2Vzc2lvbnM7XHJcbiAgICAgIHNlc3Npb25zLnB1c2goe1xyXG4gICAgICAgIGtleSwgZGV2aWNlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmZpbmRTZXNzaW9uSW5kZXgoa2V5KTtcclxuICAgICAgdGhpcy5fc2Vzc2lvbnNbaWR4XS5kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICAgIHRoaXMuc2Vzc2lvbnNDaGFuZ2VkLmVtaXQodGhpcy5zZXNzaW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVzdHJveVNlc3Npb24oa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGlkeCA9IHRoaXMuZmluZFNlc3Npb25JbmRleChrZXkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9uZXRjb25mL3Nlc3Npb24vJyArIGtleSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKFxyXG4gICAgICAgICAgbmV4dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHRoaXMuc2Vzc2lvbnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGxvYWRPcGVuU2Vzc2lvbnMoKTogT2JzZXJ2YWJsZTxTZXNzaW9uW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFNlc3Npb25bXT4oJy9uZXRjb25mL3Nlc3Npb25zJyk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95QWxsU2Vzc2lvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL25ldGNvbmYvc2Vzc2lvbnMnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBvbiB0aGUgc2VydmVyLlxyXG4gICAqL1xyXG4gIHNlc3Npb25BbGl2ZShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPiB7XHJcbiAgICAvKmNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgna2V5Jywga2V5KTsqL1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8R2VuZXJpY1NlcnZlclJlc3BvbnNlPignL25ldGNvbmYvc2Vzc2lvbi9hbGl2ZS8nICsga2V5KTtcclxuICB9XHJcblxyXG5cclxuICBkb2VzU2Vzc2lvbkV4aXN0cyhrZXk6IHN0cmluZyk6IEJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBzZXNzaW9uIG9mIHRoaXMuX3Nlc3Npb25zKSB7XHJcbiAgICAgIGlmIChzZXNzaW9uLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZpbmRTZXNzaW9uSW5kZXgoa2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25zLmZpbmRJbmRleChzID0+IHMua2V5ID09PSBrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGF0aCBpcyB4cGF0aC5cclxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly9uZXRvcGVlci5saWJlcm91dGVyLm9yZy9kb2MvbGlieWFuZy9kZXZlbC9ob3d0b3hwYXRoLmh0bWxcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZVNlc3Npb25zKHBhdGg6IGFueSk6IE9ic2VydmFibGU8U2Vzc2lvbltdPiB7XHJcbiAgICBpZiAodGhpcy5zZXNzaW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9hZE9wZW5TZXNzaW9ucygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMuc2Vzc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBvZiBwYXRoIGlzIGRlc2NyaWJlZCBpbiBkZXRhaWwgaGVyZTogaHR0cHM6Ly9uZXRvcGVlci5saWJlcm91dGVyLm9yZy9kb2MvbGlieWFuZy9kZXZlbC9ob3d0b3hwYXRoLmh0bWxcclxuICAgKiBXaGVuIG5vIHBhdGggaXMgcHJvdmlkZWQsIHRoZSB3aG9sZSB0cmVlIGlzIHJlcXVlc3RlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBycGNHZXQoc2Vzc2lvbktleTogc3RyaW5nLCByZWN1cnNpdmU6IGJvb2xlYW4sIHBhdGg/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgna2V5Jywgc2Vzc2lvbktleSlcclxuICAgICAgLmFwcGVuZCgncmVjdXJzaXZlJywgcmVjdXJzaXZlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdwYXRoJywgcGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL25ldGNvbmYvc2Vzc2lvbi9ycGNHZXQnLCB7cGFyYW1zfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=