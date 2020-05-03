/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/schemas.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SchemasService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    static newlineToBr(message) {
        /** @type {?} */
        const entityMap = {
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
        s => entityMap[s])).replace(/\n/g, '<br>');
    }
    /**
     * @return {?}
     */
    getSchemaNames() {
        return this.http.get('/netconf/schemas');
    }
    /**
     * @param {?} schemaName
     * @return {?}
     */
    getSchema(schemaName) {
        return this.http.get('/netconf/schema/' + schemaName);
    }
}
SchemasService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SchemasService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SchemasService.ngInjectableDef = i0.defineInjectable({ factory: function SchemasService_Factory() { return new SchemasService(i0.inject(i1.HttpClient)); }, token: SchemasService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemasService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQU1oRCxNQUFNOzs7O0lBRUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZTs7Y0FDMUIsU0FBUyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtZQUNYLEdBQUcsRUFBRSxRQUFRO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsUUFBUTtTQUNkO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUF6QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMTyxVQUFVOzs7Ozs7OztJQVFKLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgc3RhdGljIG5ld2xpbmVUb0JyKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGVudGl0eU1hcCA9IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICdcXCcnOiAnJiMzOTsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH07XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgcyA9PiBlbnRpdHlNYXBbc10pLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xuICB9XG5cbiAgZ2V0U2NoZW1hTmFtZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHN0cmluZ1tdPignL25ldGNvbmYvc2NoZW1hcycpO1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nPignL25ldGNvbmYvc2NoZW1hLycgKyBzY2hlbWFOYW1lKTtcbiAgfVxuXG5cbn1cbiJdfQ==