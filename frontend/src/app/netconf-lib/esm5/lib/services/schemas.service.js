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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFJaEQ7SUFLRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRWxDLDBCQUFXOzs7O0lBQWxCLFVBQW1CLE9BQWU7O1lBQzFCLFNBQVMsR0FBRztZQUNoQixHQUFHLEVBQUUsT0FBTztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsUUFBUTtTQUNkO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVU7Ozs7UUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUM7YUFDbEQsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7YUFDdEIsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLHlCQUFVOzs7O0lBQWpCLFVBQWtCLE9BQWU7OztZQUN6QixLQUFLLG9CQUFPLE9BQU8sQ0FBQzs7O1lBRXRCLFVBQVUsR0FBRyxDQUFDOztZQUNkLFVBQVUsR0FBRyxLQUFLOztZQUNsQixXQUFXLEdBQUcsS0FBSzs7WUFDbkIsTUFBTSxHQUFHLEVBQUU7O1lBQ1gsR0FBRyxHQUFHLENBQUM7O1lBQ1gsS0FBZ0IsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBbEIsSUFBTSxDQUFDLGtCQUFBO2dCQUNWLFFBQVEsQ0FBQyxFQUFFO29CQUNULEtBQUssR0FBRzt3QkFDTixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUMvQixVQUFVLEVBQUUsQ0FBQzs0QkFDYixNQUFNLElBQUksQ0FBQyxHQUFHLHFCQUFxQixDQUFDO3lCQUNyQzs2QkFBTTs0QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3lCQUNiO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxHQUFHO3dCQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQy9CLFVBQVUsRUFBRSxDQUFDOzRCQUNiLE1BQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO3lCQUN4Qjs2QkFBTTs0QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3lCQUNiO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxHQUFHO3dCQUNOLElBQUksVUFBVSxFQUFFOzRCQUNkLE1BQU0sSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO3lCQUN6Qjs2QkFBTTs0QkFDTCxNQUFNLElBQUksdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO3lCQUN2Qzt3QkFDRCxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQ3pCLE1BQU07b0JBQ1IsS0FBSyxJQUFJO3dCQUNQLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2YsSUFBSSxXQUFXLEVBQUU7Z0NBQ2YsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7NkJBQ3pCO2lDQUFNO2dDQUNMLE1BQU0sSUFBSSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7NkJBQ3hDOzRCQUNELFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQzt5QkFDNUI7NkJBQU07NEJBQ0wsTUFBTSxJQUFJLENBQUMsQ0FBQzt5QkFDYjt3QkFDRCxNQUFNO29CQUNSO3dCQUNFLE1BQU0sSUFBSSxDQUFDLENBQUM7d0JBQ1osTUFBTTtpQkFDVDtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNQOzs7Ozs7Ozs7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsa0NBQVM7Ozs7SUFBVCxVQUFVLFVBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxxQ0FBWTs7OztJQUFaLFVBQWEsVUFBa0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBd0Isa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBcEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFOTyxVQUFVOzs7eUJBRGxCO0NBNEZDLEFBdkZELElBdUZDO1NBcEZZLGNBQWM7Ozs7OztJQUViLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHN0YXRpYyBuZXdsaW5lVG9CcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbnRpdHlNYXAgPSB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH07XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvWyY8PlxcL10vZywgcyA9PiBlbnRpdHlNYXBbc10pXG4gICAgICAucmVwbGFjZSgvXFxuL2csICc8YnI+JylcbiAgICAgIC5yZXBsYWNlKC9cXHQvZywgJyZuYnNwOycpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFlhbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2hhcnMgPSBbLi4ubWVzc2FnZV07IC8vIFNwbGl0IG1lc3NhZ2UgdG8gY2hhcnMgaW4gdW5pY29kZS1zYWZlIHdheVxuXG4gICAgbGV0IGJyYWNrZXRQb3MgPSAwO1xuICAgIGxldCBzdHJpbmdGbGFnID0gZmFsc2U7XG4gICAgbGV0IHBhdHRlcm5GbGFnID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBpZHggPSAwO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaGFycykge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZyAmJiAhcGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgIGJyYWNrZXRQb3MrKztcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzxkaXYgY2xhc3M9XCJsZXZlbFwiPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnICYmICFwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgYnJhY2tldFBvcy0tO1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8L2Rpdj4nICsgYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgaWYgKHN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzxzcGFuIGNsYXNzPVwic3RyaW5nXCI+JyArIGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cmluZ0ZsYWcgPSAhc3RyaW5nRmxhZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXFwnJzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcpIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gYyArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnPHNwYW4gY2xhc3M9XCJwYXR0ZXJuXCI+JyArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXR0ZXJuRmxhZyA9ICFwYXR0ZXJuRmxhZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWR4Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRTY2hlbWFOYW1lcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nW10+KCcvbmV0Y29uZi9zY2hlbWFzJyk7XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmc+KCcvbmV0Y29uZi9zY2hlbWEvJyArIHNjaGVtYU5hbWUpO1xuICB9XG5cbiAgcmVtb3ZlU2NoZW1hKHNjaGVtYU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8R2VuZXJpY1NlcnZlclJlc3BvbnNlPignL25ldGNvbmYvc2NoZW1hLycgKyBzY2hlbWFOYW1lKTtcbiAgfVxuXG5cbn1cbiJdfQ==