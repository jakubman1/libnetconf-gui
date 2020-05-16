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
    /**
     * @param {?} schemaName
     * @return {?}
     */
    removeSchema(schemaName) {
        return this.http.delete('/netconf/schema/' + schemaName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQU9oRCxNQUFNOzs7O0lBRUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZTs7Y0FDMUIsU0FBUyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtZQUNYLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVTs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDO2FBQ2xELE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWU7O2NBQ3pCLEtBQUssR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDOzs7WUFFdEIsVUFBVSxHQUFHLENBQUM7O1lBQ2QsVUFBVSxHQUFHLEtBQUs7O1lBQ2xCLFdBQVcsR0FBRyxLQUFLOztZQUNuQixNQUFNLEdBQUcsRUFBRTs7WUFDWCxHQUFHLEdBQUcsQ0FBQztRQUNYLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxFQUFFO2dCQUNULEtBQUssR0FBRztvQkFDTixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUMvQixVQUFVLEVBQUUsQ0FBQzt3QkFDYixNQUFNLElBQUksQ0FBQyxHQUFHLHFCQUFxQixDQUFDO3FCQUNyQzt5QkFBTTt3QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3FCQUNiO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQy9CLFVBQVUsRUFBRSxDQUFDO3dCQUNiLE1BQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3FCQUNiO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLElBQUksVUFBVSxFQUFFO3dCQUNkLE1BQU0sSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUN6Qjt5QkFBTTt3QkFDTCxNQUFNLElBQUksdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyxJQUFJO29CQUNQLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ2YsSUFBSSxXQUFXLEVBQUU7NEJBQ2YsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7eUJBQ3hDO3dCQUNELFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQztxQkFDNUI7eUJBQU07d0JBQ0wsTUFBTSxJQUFJLENBQUMsQ0FBQztxQkFDYjtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxDQUFDLENBQUM7b0JBQ1osTUFBTTthQUNUO1lBQ0QsR0FBRyxFQUFFLENBQUM7U0FDUDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFVBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsVUFBa0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBd0Isa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7O1lBcEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTk8sVUFBVTs7Ozs7Ozs7SUFTSiw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0dlbmVyaWNTZXJ2ZXJSZXNwb25zZX0gZnJvbSAnLi4vY2xhc3Nlcy9HZW5lcmljU2VydmVyUmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzdGF0aWMgbmV3bGluZVRvQnIobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZW50aXR5TWFwID0ge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICcvJzogJyYjeDJGOydcbiAgICB9O1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoL1smPD5cXC9dL2csIHMgPT4gZW50aXR5TWFwW3NdKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpXG4gICAgICAucmVwbGFjZSgvXFx0L2csICcmbmJzcDsnKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRZYW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGNoYXJzID0gWy4uLm1lc3NhZ2VdOyAvLyBTcGxpdCBtZXNzYWdlIHRvIGNoYXJzIGluIHVuaWNvZGUtc2FmZSB3YXlcblxuICAgIGxldCBicmFja2V0UG9zID0gMDtcbiAgICBsZXQgc3RyaW5nRmxhZyA9IGZhbHNlO1xuICAgIGxldCBwYXR0ZXJuRmxhZyA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgaWR4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGMgb2YgY2hhcnMpIHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcgJiYgIXBhdHRlcm5GbGFnKSB7XG4gICAgICAgICAgICBicmFja2V0UG9zKys7XG4gICAgICAgICAgICByZXN1bHQgKz0gYyArICc8ZGl2IGNsYXNzPVwibGV2ZWxcIj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZyAmJiAhcGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgIGJyYWNrZXRQb3MtLTtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnPC9kaXY+JyArIGM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgIGlmIChzdHJpbmdGbGFnKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYyArICc8L3NwYW4+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8c3BhbiBjbGFzcz1cInN0cmluZ1wiPicgKyBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHJpbmdGbGFnID0gIXN0cmluZ0ZsYWc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1xcJyc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IGMgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJzxzcGFuIGNsYXNzPVwicGF0dGVyblwiPicgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0dGVybkZsYWcgPSAhcGF0dGVybkZsYWc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlkeCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0U2NoZW1hTmFtZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHN0cmluZ1tdPignL25ldGNvbmYvc2NoZW1hcycpO1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nPignL25ldGNvbmYvc2NoZW1hLycgKyBzY2hlbWFOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZVNjaGVtYShzY2hlbWFOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4oJy9uZXRjb25mL3NjaGVtYS8nICsgc2NoZW1hTmFtZSk7XG4gIH1cblxuXG59XG4iXX0=