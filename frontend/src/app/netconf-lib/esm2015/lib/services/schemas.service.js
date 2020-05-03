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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQU9oRCxNQUFNOzs7O0lBRUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZTs7Y0FDMUIsU0FBUyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTs7O1lBR1gsR0FBRyxFQUFFLFFBQVE7U0FDZDtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUM7YUFDbEQsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7YUFDdEIsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZTs7Y0FDekIsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7OztZQUV0QixVQUFVLEdBQUcsQ0FBQzs7WUFDZCxVQUFVLEdBQUcsS0FBSzs7WUFDbEIsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE1BQU0sR0FBRyxFQUFFOztZQUNYLEdBQUcsR0FBRyxDQUFDO1FBQ1gsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDckIsUUFBUSxDQUFDLEVBQUU7Z0JBQ1QsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQy9CLFVBQVUsRUFBRSxDQUFDO3dCQUNiLE1BQU0sSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQ2I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDL0IsVUFBVSxFQUFFLENBQUM7d0JBQ2IsTUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7cUJBQ3hCO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxDQUFDLENBQUM7cUJBQ2I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sSUFBSSxVQUFVLEVBQUU7d0JBQ2QsTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7cUJBQ3pCO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLElBQUk7b0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDZixJQUFJLFdBQVcsRUFBRTs0QkFDZixNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsTUFBTSxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQzt5QkFDeEM7d0JBQ0QsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDTCxNQUFNLElBQUksQ0FBQyxDQUFDO3FCQUNiO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQztvQkFDWixNQUFNO2FBQ1Q7WUFDRCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxVQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUF3QixrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7WUF0RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOTyxVQUFVOzs7Ozs7OztJQVNKLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7R2VuZXJpY1NlcnZlclJlc3BvbnNlfSBmcm9tICcuLi9jbGFzc2VzL0dlbmVyaWNTZXJ2ZXJSZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHN0YXRpYyBuZXdsaW5lVG9CcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbnRpdHlNYXAgPSB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgLy8gJ1wiJzogJyZxdW90OycsXG4gICAgICAvLyAnXFwnJzogJyYjMzk7JyxcbiAgICAgICcvJzogJyYjeDJGOydcbiAgICB9O1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoL1smPD5cXC9dL2csIHMgPT4gZW50aXR5TWFwW3NdKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpXG4gICAgICAucmVwbGFjZSgvXFx0L2csICcmbmJzcDsnKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRZYW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGNoYXJzID0gWy4uLm1lc3NhZ2VdOyAvLyBTcGxpdCBtZXNzYWdlIHRvIGNoYXJzIGluIHVuaWNvZGUtc2FmZSB3YXlcblxuICAgIGxldCBicmFja2V0UG9zID0gMDtcbiAgICBsZXQgc3RyaW5nRmxhZyA9IGZhbHNlO1xuICAgIGxldCBwYXR0ZXJuRmxhZyA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgaWR4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGMgb2YgY2hhcnMpIHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICBpZiAoIXN0cmluZ0ZsYWcgJiYgIXBhdHRlcm5GbGFnKSB7XG4gICAgICAgICAgICBicmFja2V0UG9zKys7XG4gICAgICAgICAgICByZXN1bHQgKz0gYyArICc8ZGl2IGNsYXNzPVwibGV2ZWxcIj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgIGlmICghc3RyaW5nRmxhZyAmJiAhcGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgIGJyYWNrZXRQb3MtLTtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnPC9kaXY+JyArIGM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgIGlmIChzdHJpbmdGbGFnKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gYyArICc8L3NwYW4+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8c3BhbiBjbGFzcz1cInN0cmluZ1wiPicgKyBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHJpbmdGbGFnID0gIXN0cmluZ0ZsYWc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1xcJyc6XG4gICAgICAgICAgaWYgKCFzdHJpbmdGbGFnKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVybkZsYWcpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IGMgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJzxzcGFuIGNsYXNzPVwicGF0dGVyblwiPicgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0dGVybkZsYWcgPSAhcGF0dGVybkZsYWc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlkeCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0U2NoZW1hTmFtZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHN0cmluZ1tdPignL25ldGNvbmYvc2NoZW1hcycpO1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8c3RyaW5nPignL25ldGNvbmYvc2NoZW1hLycgKyBzY2hlbWFOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZVNjaGVtYShzY2hlbWFOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPEdlbmVyaWNTZXJ2ZXJSZXNwb25zZT4oJy9uZXRjb25mL3NjaGVtYS8nICsgc2NoZW1hTmFtZSk7XG4gIH1cblxuXG59XG4iXX0=