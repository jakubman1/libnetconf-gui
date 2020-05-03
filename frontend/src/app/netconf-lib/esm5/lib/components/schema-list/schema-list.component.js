/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/schema-list/schema-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SchemasService } from '../../services/schemas.service';
var SchemaListComponent = /** @class */ (function () {
    function SchemaListComponent(schemasService) {
        this.schemasService = schemasService;
        this.loading = false;
        this.error = '';
        this.schemas = [];
    }
    /**
     * @return {?}
     */
    SchemaListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.schemasService.getSchemaNames().subscribe((/**
         * @param {?} names
         * @return {?}
         */
        function (names) {
            _this.schemas = names;
            _this.loading = false;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.error = err.message;
            _this.loading = false;
        }));
    };
    SchemaListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-schema-list',
                    template: "<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul>\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\"\n         [routerLink]=\"['..', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}"]
                }] }
    ];
    SchemaListComponent.ctorParameters = function () { return [
        { type: SchemasService }
    ]; };
    return SchemaListComponent;
}());
export { SchemaListComponent };
if (false) {
    /** @type {?} */
    SchemaListComponent.prototype.loading;
    /** @type {?} */
    SchemaListComponent.prototype.error;
    /** @type {?} */
    SchemaListComponent.prototype.schemas;
    /** @type {?} */
    SchemaListComponent.prototype.schemasService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RDtJQU9FLDZCQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFakQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUo4QixDQUFDOzs7O0lBTXRELHNDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQzlDLFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7Ozs7UUFDRCxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCtXQUEyQzs7aUJBRTVDOzs7Z0JBTk8sY0FBYzs7SUE0QnRCLDBCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksbUJBQW1COzs7SUFJOUIsc0NBQWdCOztJQUNoQixvQ0FBVzs7SUFDWCxzQ0FBdUI7O0lBSlgsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NoZW1hc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zY2hlbWEtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlbWEtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVtYS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNjaGVtYXNTZXJ2aWNlOiBTY2hlbWFzU2VydmljZSkgeyB9XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBlcnJvciA9ICcnO1xuICBzY2hlbWFzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zY2hlbWFzU2VydmljZS5nZXRTY2hlbWFOYW1lcygpLnN1YnNjcmliZShcbiAgICBuYW1lcyA9PiB7XG4gICAgICB0aGlzLnNjaGVtYXMgPSBuYW1lcztcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZXJyID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==