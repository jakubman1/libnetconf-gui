/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import * as i0 from "@angular/core";
import * as i1 from "./socket.service";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(socketService) {
        this.socketService = socketService;
    }
    /**
     * @param {?} device
     * @param {?} target
     * @param {?} config
     * @return {?}
     */
    ConfigurationService.prototype.editConfig = /**
     * @param {?} device
     * @param {?} target
     * @param {?} config
     * @return {?}
     */
    function (device, target, config) {
        return;
    };
    /**
     * @param {?} device
     * @return {?}
     */
    ConfigurationService.prototype.commitChanges = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        return;
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ConfigurationService.ctorParameters = function () { return [
        { type: SocketService }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.inject(i1.SocketService)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.socketService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7OztBQUUvQztJQUtFLDhCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDOzs7Ozs7O0lBRU0seUNBQVU7Ozs7OztJQUFqQixVQUFrQixNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDOUQsT0FBTztJQUNULENBQUM7Ozs7O0lBRU0sNENBQWE7Ozs7SUFBcEIsVUFBcUIsTUFBYztRQUNqQyxPQUFPO0lBQ1QsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQUpPLGFBQWE7OzsrQkFGckI7Q0FvQkMsQUFoQkQsSUFnQkM7U0FiWSxvQkFBb0I7Ozs7OztJQUVuQiw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vY2xhc3Nlcy9kZXZpY2UnO1xyXG5pbXBvcnQge1NvY2tldFNlcnZpY2V9IGZyb20gJy4vc29ja2V0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvY2tldFNlcnZpY2U6IFNvY2tldFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlZGl0Q29uZmlnKGRldmljZTogRGV2aWNlLCB0YXJnZXQ6IHN0cmluZywgY29uZmlnOiBvYmplY3QpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21taXRDaGFuZ2VzKGRldmljZTogRGV2aWNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=