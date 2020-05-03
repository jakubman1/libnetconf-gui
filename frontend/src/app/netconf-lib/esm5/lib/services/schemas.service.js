/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/schemas.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SchemasService = /** @class */ (function () {
    function SchemasService(http) {
        this.http = http;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    SchemasService.newlineToBr = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;',
            '/': '&#x2F;'
        };
        return message.replace(/[&<>"'\/]/g, (/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return entityMap[s]; })).replace(/\n/g, '<br>');
    };
    /**
     * @return {?}
     */
    SchemasService.prototype.getSchemaNames = /**
     * @return {?}
     */
    function () {
        return this.http.get('/netconf/schemas');
    };
    /**
     * @param {?} schemaName
     * @return {?}
     */
    SchemasService.prototype.getSchema = /**
     * @param {?} schemaName
     * @return {?}
     */
    function (schemaName) {
        return this.http.get('/netconf/schema/' + schemaName);
    };
    SchemasService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SchemasService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SchemasService.ngInjectableDef = i0.defineInjectable({ factory: function SchemasService_Factory() { return new SchemasService(i0.inject(i1.HttpClient)); }, token: SchemasService, providedIn: "root" });
    return SchemasService;
}());
export { SchemasService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemasService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQUdoRDtJQUtFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7Ozs7SUFFbEMsMEJBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBZTs7WUFDMUIsU0FBUyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtZQUNYLEdBQUcsRUFBRSxRQUFRO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsUUFBUTtTQUNkO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQUxPLFVBQVU7Ozt5QkFEbEI7Q0FnQ0MsQUE1QkQsSUE0QkM7U0F6QlksY0FBYzs7Ozs7O0lBRWIsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzdGF0aWMgbmV3bGluZVRvQnIobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZW50aXR5TWFwID0ge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmI3gyRjsnXG4gICAgfTtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBzID0+IGVudGl0eU1hcFtzXSkucmVwbGFjZSgvXFxuL2csICc8YnI+Jyk7XG4gIH1cblxuICBnZXRTY2hlbWFOYW1lcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nW10+KCcvbmV0Y29uZi9zY2hlbWFzJyk7XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmc+KCcvbmV0Y29uZi9zY2hlbWEvJyArIHNjaGVtYU5hbWUpO1xuICB9XG5cblxufVxuIl19