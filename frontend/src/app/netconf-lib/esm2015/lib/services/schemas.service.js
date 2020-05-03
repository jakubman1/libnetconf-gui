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
            // '"': '&quot;',
            // '\'': '&#39;',
            '/': '&#x2F;'
        };
        return message.replace(/[&<>\/]/g, (/**
         * @param {?} s
         * @return {?}
         */
        s => entityMap[s]))
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;');
    }
    /**
     * @param {?} message
     * @return {?}
     */
    static formatYang(message) {
        /** @type {?} */
        const chars = [...message];
        // Split message to chars in unicode-safe way
        /** @type {?} */
        let bracketPos = 0;
        /** @type {?} */
        let stringFlag = false;
        /** @type {?} */
        let patternFlag = false;
        /** @type {?} */
        let result = '';
        /** @type {?} */
        let idx = 0;
        for (const c of chars) {
            switch (c) {
                case '{':
                    if (!stringFlag && !patternFlag) {
                        bracketPos++;
                        result += c + '<div class="level">';
                    }
                    else {
                        result += c;
                    }
                    break;
                case '}':
                    if (!stringFlag && !patternFlag) {
                        bracketPos--;
                        result += '</div>' + c;
                    }
                    else {
                        result += c;
                    }
                    break;
                case '"':
                    if (stringFlag) {
                        result += c + '</span>';
                    }
                    else {
                        result += '<span class="string">' + c;
                    }
                    stringFlag = !stringFlag;
                    break;
                case '\'':
                    if (!stringFlag) {
                        if (patternFlag) {
                            result += c + '</span>';
                        }
                        else {
                            result += '<span class="pattern">' + c;
                        }
                        patternFlag = !patternFlag;
                    }
                    else {
                        result += c;
                    }
                    break;
                default:
                    result += c;
                    break;
            }
            idx++;
        }
        return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQU1oRCxNQUFNOzs7O0lBRUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZTs7Y0FDMUIsU0FBUyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTs7O1lBR1gsR0FBRyxFQUFFLFFBQVE7U0FDZDtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUM7YUFDbEQsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7YUFDdEIsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZTs7Y0FDekIsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7OztZQUV0QixVQUFVLEdBQUcsQ0FBQzs7WUFDZCxVQUFVLEdBQUcsS0FBSzs7WUFDbEIsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE1BQU0sR0FBRyxFQUFFOztZQUNYLEdBQUcsR0FBRyxDQUFDO1FBQ1gsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDckIsUUFBUSxDQUFDLEVBQUU7Z0JBQ1QsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQy9CLFVBQVUsRUFBRSxDQUFDO3dCQUNiLE1BQU0sSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQ2I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDL0IsVUFBVSxFQUFFLENBQUM7d0JBQ2IsTUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7cUJBQ3hCO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQ2I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sSUFBSSxVQUFVLEVBQUU7d0JBQ2QsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7cUJBQ3pCO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLElBQUk7b0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDZixJQUFJLFdBQVcsRUFBRTs0QkFDZixNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsTUFBTSxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQzt5QkFDeEM7d0JBQ0QsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3FCQUNiO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQztvQkFDWixNQUFNO2FBQ1Q7WUFDRCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMTyxVQUFVOzs7Ozs7OztJQVFKLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgc3RhdGljIG5ld2xpbmVUb0JyKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGVudGl0eU1hcCA9IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAvLyAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIC8vICdcXCcnOiAnJiMzOTsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH07XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvWyY8PlxcL10vZywgcyA9PiBlbnRpdHlNYXBbc10pXG4gICAgICAucmVwbGFjZSgvXFxuL2csICc8YnI+JylcbiAgICAgIC5yZXBsYWNlKC9cXHQvZywgJyZuYnNwOycpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFlhbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2hhcnMgPSBbLi4ubWVzc2FnZV07IC8vIFNwbGl0IG1lc3NhZ2UgdG8gY2hhcnMgaW4gdW5pY29kZS1zYWZlIHdheVxuXG4gICAgbGV0IGJyYWNrZXRQb3MgPSAwO1xuICAgIGxldCBzdHJpbmdGbGFnID0gZmFsc2U7XG4gICAgbGV0IHBhdHRlcm5GbGFnID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBpZHggPSAwO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaGFycykge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZyAmJiAhcGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgIGJyYWNrZXRQb3MrKztcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzxkaXYgY2xhc3M9XCJsZXZlbFwiPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnICYmICFwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgYnJhY2tldFBvcy0tO1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8L2Rpdj4nICsgYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgaWYgKHN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzxzcGFuIGNsYXNzPVwic3RyaW5nXCI+JyArIGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cmluZ0ZsYWcgPSAhc3RyaW5nRmxhZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXFwnJzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gYyArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnPHNwYW4gY2xhc3M9XCJwYXR0ZXJuXCI+JyArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXR0ZXJuRmxhZyA9ICFwYXR0ZXJuRmxhZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWR4Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRTY2hlbWFOYW1lcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nW10+KCcvbmV0Y29uZi9zY2hlbWFzJyk7XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmc+KCcvbmV0Y29uZi9zY2hlbWEvJyArIHNjaGVtYU5hbWUpO1xuICB9XG5cblxufVxuIl19