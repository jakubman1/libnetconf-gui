/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        console.log('CONSTRUCTOR OF SESSION SERVICE CALLED');
    }
    /**
     * @return {?}
     */
    get sessions() {
        console.log('Getting sessions');
        console.log(this._sessions);
        return this._sessions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sessions(value) {
        console.log('Setting sessions');
        console.log(value);
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
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    getCompatibleDeviceSessions(filter) {
        // TODO: Filter
        console.log('Getting compatible sessions');
        console.log(this.sessions);
        return this.sessions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBS2hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTW5DLE1BQU07Ozs7SUFlSixZQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSTNCLGNBQVMsR0FBYyxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUw5RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQWZELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFnQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFVRCxVQUFVLENBQUMsR0FBVyxFQUFFLE1BQWM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRTs7a0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxNQUFNO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7YUFBTTs7a0JBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7O0lBR0QsY0FBYyxDQUFDLEdBQVc7O2NBQ2xCLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO2FBQy9DLElBQUksQ0FDSCxHQUFHOzs7O1FBQ0QsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFDRixDQUNGLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUtELFlBQVksQ0FBQyxHQUFXO1FBQ3RCO2dDQUN3QjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3Qix5QkFBeUIsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUtNLDJCQUEyQixDQUFDLE1BQVc7UUFDNUMsZUFBZTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7O1lBN0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVk8sVUFBVTs7Ozs7Ozs7SUE4QmhCLG1DQUFrQzs7SUFFbEMseUNBQWdGOztJQU5wRSw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0dlbmVyaWNTZXJ2ZXJSZXNwb25zZX0gZnJvbSAnLi4vY2xhc3Nlcy9HZW5lcmljU2VydmVyUmVzcG9uc2UnO1xyXG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4uL2NsYXNzZXMvc2Vzc2lvbic7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi9jbGFzc2VzL2RldmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7dGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xyXG5cclxuICBnZXQgc2Vzc2lvbnMoKTogU2Vzc2lvbltdIHtcclxuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHNlc3Npb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9zZXNzaW9ucyk7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbnM7XHJcbiAgfVxyXG5cclxuICBzZXQgc2Vzc2lvbnModmFsdWU6IFNlc3Npb25bXSkge1xyXG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgc2Vzc2lvbnMnKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHRoaXMuX3Nlc3Npb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ09OU1RSVUNUT1IgT0YgU0VTU0lPTiBTRVJWSUNFIENBTExFRCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2Vzc2lvbnM6IFNlc3Npb25bXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgc2Vzc2lvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2Vzc2lvbltdPigpO1xyXG5cclxuICBhZGRTZXNzaW9uKGtleTogc3RyaW5nLCBkZXZpY2U6IERldmljZSkge1xyXG4gICAgaWYgKCF0aGlzLmRvZXNTZXNzaW9uRXhpc3RzKGtleSkpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbnMgPSB0aGlzLnNlc3Npb25zO1xyXG4gICAgICBzZXNzaW9ucy5wdXNoKHtcclxuICAgICAgICBrZXksIGRldmljZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXNzaW9ucyA9IHNlc3Npb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5maW5kU2Vzc2lvbkluZGV4KGtleSk7XHJcbiAgICAgIHRoaXMuX3Nlc3Npb25zW2lkeF0uZGV2aWNlID0gZGV2aWNlO1xyXG4gICAgICB0aGlzLnNlc3Npb25zQ2hhbmdlZC5lbWl0KHRoaXMuc2Vzc2lvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGRlc3Ryb3lTZXNzaW9uKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbmRTZXNzaW9uSW5kZXgoa2V5KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvbmV0Y29uZi9zZXNzaW9uLycgKyBrZXkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChcclxuICAgICAgICAgIG5leHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9ucy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uc0NoYW5nZWQuZW1pdCh0aGlzLnNlc3Npb25zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2FkT3BlblNlc3Npb25zKCk6IE9ic2VydmFibGU8U2Vzc2lvbltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTZXNzaW9uW10+KCcvbmV0Y29uZi9zZXNzaW9ucycpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveUFsbFNlc3Npb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9uZXRjb25mL3Nlc3Npb25zJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgb24gdGhlIHNlcnZlci5cclxuICAgKi9cclxuICBzZXNzaW9uQWxpdmUoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4ge1xyXG4gICAgLypjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXHJcbiAgICAgIC5hcHBlbmQoJ2tleScsIGtleSk7Ki9cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4oJy9uZXRjb25mL3Nlc3Npb24vYWxpdmUvJyArIGtleSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZG9lc1Nlc3Npb25FeGlzdHMoa2V5OiBzdHJpbmcpOiBCb29sZWFuIHtcclxuICAgIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiB0aGlzLl9zZXNzaW9ucykge1xyXG4gICAgICBpZiAoc2Vzc2lvbi5rZXkgPT09IGtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmaW5kU2Vzc2lvbkluZGV4KGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucy5maW5kSW5kZXgocyA9PiBzLmtleSA9PT0ga2V5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBpcyB4cGF0aCAoPylcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29tcGF0aWJsZURldmljZVNlc3Npb25zKGZpbHRlcjogYW55KTogU2Vzc2lvbltdIHtcclxuICAgIC8vIFRPRE86IEZpbHRlclxyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgY29tcGF0aWJsZSBzZXNzaW9ucycpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zZXNzaW9ucyk7XHJcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9ucztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==