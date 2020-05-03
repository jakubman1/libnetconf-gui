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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFHaEQ7SUFLRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRWxDLDBCQUFXOzs7O0lBQWxCLFVBQW1CLE9BQWU7O1lBQzFCLFNBQVMsR0FBRztZQUNoQixHQUFHLEVBQUUsT0FBTztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsR0FBRyxFQUFFLE1BQU07OztZQUdYLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksRUFBQzthQUNsRCxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzthQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0seUJBQVU7Ozs7SUFBakIsVUFBa0IsT0FBZTs7O1lBQ3pCLEtBQUssb0JBQU8sT0FBTyxDQUFDOzs7WUFFdEIsVUFBVSxHQUFHLENBQUM7O1lBQ2QsVUFBVSxHQUFHLEtBQUs7O1lBQ2xCLFdBQVcsR0FBRyxLQUFLOztZQUNuQixNQUFNLEdBQUcsRUFBRTs7WUFDWCxHQUFHLEdBQUcsQ0FBQzs7WUFDWCxLQUFnQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFsQixJQUFNLENBQUMsa0JBQUE7Z0JBQ1YsUUFBUSxDQUFDLEVBQUU7b0JBQ1QsS0FBSyxHQUFHO3dCQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQy9CLFVBQVUsRUFBRSxDQUFDOzRCQUNiLE1BQU0sSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUM7eUJBQ3JDOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7eUJBQ2I7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUc7d0JBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDL0IsVUFBVSxFQUFFLENBQUM7NEJBQ2IsTUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7eUJBQ2I7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLEdBQUc7d0JBQ04sSUFBSSxVQUFVLEVBQUU7NEJBQ2QsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7eUJBQ3ZDO3dCQUNELFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDekIsTUFBTTtvQkFDUixLQUFLLElBQUk7d0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRTs0QkFDZixJQUFJLFdBQVcsRUFBRTtnQ0FDZixNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzs2QkFDekI7aUNBQU07Z0NBQ0wsTUFBTSxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQzs2QkFDeEM7NEJBQ0QsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDO3lCQUM1Qjs2QkFBTTs0QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3lCQUNiO3dCQUNELE1BQU07b0JBQ1I7d0JBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQzt3QkFDWixNQUFNO2lCQUNUO2dCQUNELEdBQUcsRUFBRSxDQUFDO2FBQ1A7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkFsRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQUxPLFVBQVU7Ozt5QkFEbEI7Q0F5RkMsQUFyRkQsSUFxRkM7U0FsRlksY0FBYzs7Ozs7O0lBRWIsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzdGF0aWMgbmV3bGluZVRvQnIobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZW50aXR5TWFwID0ge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgIC8vICdcIic6ICcmcXVvdDsnLFxuICAgICAgLy8gJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmI3gyRjsnXG4gICAgfTtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC9bJjw+XFwvXS9nLCBzID0+IGVudGl0eU1hcFtzXSlcbiAgICAgIC5yZXBsYWNlKC9cXG4vZywgJzxicj4nKVxuICAgICAgLnJlcGxhY2UoL1xcdC9nLCAnJm5ic3A7Jyk7XG4gIH1cblxuICBzdGF0aWMgZm9ybWF0WWFuZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjaGFycyA9IFsuLi5tZXNzYWdlXTsgLy8gU3BsaXQgbWVzc2FnZSB0byBjaGFycyBpbiB1bmljb2RlLXNhZmUgd2F5XG5cbiAgICBsZXQgYnJhY2tldFBvcyA9IDA7XG4gICAgbGV0IHN0cmluZ0ZsYWcgPSBmYWxzZTtcbiAgICBsZXQgcGF0dGVybkZsYWcgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbGV0IGlkeCA9IDA7XG4gICAgZm9yIChjb25zdCBjIG9mIGNoYXJzKSB7XG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnICYmICFwYXR0ZXJuRmxhZykge1xuICAgICAgICAgICAgYnJhY2tldFBvcysrO1xuICAgICAgICAgICAgcmVzdWx0ICs9IGMgKyAnPGRpdiBjbGFzcz1cImxldmVsXCI+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcgJiYgIXBhdHRlcm5GbGFnKSB7XG4gICAgICAgICAgICBicmFja2V0UG9zLS07XG4gICAgICAgICAgICByZXN1bHQgKz0gJzwvZGl2PicgKyBjO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICBpZiAoc3RyaW5nRmxhZykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGMgKyAnPC9zcGFuPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnPHNwYW4gY2xhc3M9XCJzdHJpbmdcIj4nICsgYztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyaW5nRmxhZyA9ICFzdHJpbmdGbGFnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdcXCcnOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZykge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5GbGFnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSBjICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9ICc8c3BhbiBjbGFzcz1cInBhdHRlcm5cIj4nICsgYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdHRlcm5GbGFnID0gIXBhdHRlcm5GbGFnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0ICs9IGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZHgrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFNjaGVtYU5hbWVzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmdbXT4oJy9uZXRjb25mL3NjaGVtYXMnKTtcbiAgfVxuXG4gIGdldFNjaGVtYShzY2hlbWFOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHN0cmluZz4oJy9uZXRjb25mL3NjaGVtYS8nICsgc2NoZW1hTmFtZSk7XG4gIH1cblxuXG59XG4iXX0=