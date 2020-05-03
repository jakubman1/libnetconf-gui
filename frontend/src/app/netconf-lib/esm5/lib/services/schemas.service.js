/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/schemas.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            // '"': '&quot;',
            // '\'': '&#39;',
            '/': '&#x2F;'
        };
        return message.replace(/[&<>\/]/g, (/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return entityMap[s]; }))
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;');
    };
    /**
     * @param {?} message
     * @return {?}
     */
    SchemasService.formatYang = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var e_1, _a;
        /** @type {?} */
        var chars = tslib_1.__spread(message);
        // Split message to chars in unicode-safe way
        /** @type {?} */
        var bracketPos = 0;
        /** @type {?} */
        var stringFlag = false;
        /** @type {?} */
        var patternFlag = false;
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var idx = 0;
        try {
            for (var chars_1 = tslib_1.__values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
                var c = chars_1_1.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
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
    /**
     * @param {?} schemaName
     * @return {?}
     */
    SchemasService.prototype.removeSchema = /**
     * @param {?} schemaName
     * @return {?}
     */
    function (schemaName) {
        return this.http.delete('/netconf/schema/' + schemaName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFJaEQ7SUFLRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRWxDLDBCQUFXOzs7O0lBQWxCLFVBQW1CLE9BQWU7O1lBQzFCLFNBQVMsR0FBRztZQUNoQixHQUFHLEVBQUUsT0FBTztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsR0FBRyxFQUFFLE1BQU07OztZQUdYLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksRUFBQzthQUNsRCxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzthQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0seUJBQVU7Ozs7SUFBakIsVUFBa0IsT0FBZTs7O1lBQ3pCLEtBQUssb0JBQU8sT0FBTyxDQUFDOzs7WUFFdEIsVUFBVSxHQUFHLENBQUM7O1lBQ2QsVUFBVSxHQUFHLEtBQUs7O1lBQ2xCLFdBQVcsR0FBRyxLQUFLOztZQUNuQixNQUFNLEdBQUcsRUFBRTs7WUFDWCxHQUFHLEdBQUcsQ0FBQzs7WUFDWCxLQUFnQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFsQixJQUFNLENBQUMsa0JBQUE7Z0JBQ1YsUUFBUSxDQUFDLEVBQUU7b0JBQ1QsS0FBSyxHQUFHO3dCQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQy9CLFVBQVUsRUFBRSxDQUFDOzRCQUNiLE1BQU0sSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUM7eUJBQ3JDOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7eUJBQ2I7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUc7d0JBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDL0IsVUFBVSxFQUFFLENBQUM7NEJBQ2IsTUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7eUJBQ2I7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUc7d0JBQ04sSUFBSSxVQUFVLEVBQUU7NEJBQ2QsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7eUJBQ3ZDO3dCQUNELFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDekIsTUFBTTtvQkFDUixLQUFLLElBQUk7d0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRTs0QkFDZixJQUFJLFdBQVcsRUFBRTtnQ0FDZixNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzs2QkFDekI7aUNBQU07Z0NBQ0wsTUFBTSxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQzs2QkFDeEM7NEJBQ0QsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDO3lCQUM1Qjs2QkFBTTs0QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3lCQUNiO3dCQUNELE1BQU07b0JBQ1I7d0JBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQzt3QkFDWixNQUFNO2lCQUNUO2dCQUNELEdBQUcsRUFBRSxDQUFDO2FBQ1A7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxVQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUF3QixrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDOztnQkF0RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQU5PLFVBQVU7Ozt5QkFEbEI7Q0E4RkMsQUF6RkQsSUF5RkM7U0F0RlksY0FBYzs7Ozs7O0lBRWIsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtHZW5lcmljU2VydmVyUmVzcG9uc2V9IGZyb20gJy4uL2NsYXNzZXMvR2VuZXJpY1NlcnZlclJlc3BvbnNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgc3RhdGljIG5ld2xpbmVUb0JyKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGVudGl0eU1hcCA9IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAvLyAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIC8vICdcXCcnOiAnJiMzOTsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH07XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvWyY8PlxcL10vZywgcyA9PiBlbnRpdHlNYXBbc10pXG4gICAgICAucmVwbGFjZSgvXFxuL2csICc8YnI+JylcbiAgICAgIC5yZXBsYWNlKC9cXHQvZywgJyZuYnNwOycpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFlhbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2hhcnMgPSBbLi4ubWVzc2FnZV07IC8vIFNwbGl0IG1lc3NhZ2UgdG8gY2hhcnMgaW4gdW5pY29kZS1zYWZlIHdheVxuXG4gICAgbGV0IGJyYWNrZXRQb3MgPSAwO1xuICAgIGxldCBzdHJpbmdGbGFnID0gZmFsc2U7XG4gICAgbGV0IHBhdHRlcm5GbGFnID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBpZHggPSAwO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaGFycykge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZyAmJiAhcGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgIGJyYWNrZXRQb3MrKztcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzxkaXYgY2xhc3M9XCJsZXZlbFwiPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnICYmICFwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgYnJhY2tldFBvcy0tO1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8L2Rpdj4nICsgYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgaWYgKHN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzxzcGFuIGNsYXNzPVwic3RyaW5nXCI+JyArIGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cmluZ0ZsYWcgPSAhc3RyaW5nRmxhZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXFwnJzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gYyArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnPHNwYW4gY2xhc3M9XCJwYXR0ZXJuXCI+JyArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXR0ZXJuRmxhZyA9ICFwYXR0ZXJuRmxhZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWR4Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRTY2hlbWFOYW1lcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nW10+KCcvbmV0Y29uZi9zY2hlbWFzJyk7XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmc+KCcvbmV0Y29uZi9zY2hlbWEvJyArIHNjaGVtYU5hbWUpO1xuICB9XG5cbiAgcmVtb3ZlU2NoZW1hKHNjaGVtYU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPignL25ldGNvbmYvc2NoZW1hLycgKyBzY2hlbWFOYW1lKTtcbiAgfVxuXG5cbn1cbiJdfQ==