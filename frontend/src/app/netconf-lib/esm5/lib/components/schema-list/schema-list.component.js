/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/schema-list/schema-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SchemasService } from '../../services/schemas.service';
var SchemaListComponent = /** @class */ (function () {
    function SchemaListComponent(schemasService) {
        this.schemasService = schemasService;
        this.selected = '';
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
    /**
     * @param {?} name
     * @return {?}
     */
    SchemaListComponent.prototype.removeSchema = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        if (confirm('Do you really want to remove ' + name + '?')) {
            this.loading = true;
            this.schemasService.removeSchema(name).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var idx = _this.schemas.indexOf(name);
                _this.schemas.splice(idx, 1);
                if (!res.success) {
                    _this.error = res.message;
                }
                _this.loading = false;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.error = err.message;
                _this.loading = false;
            }));
        }
    };
    SchemaListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-schema-list',
                    template: "<h3 *ngIf=\"loading\">Loading schemas...</h3>\n<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul class=\"schema-list\">\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\" [class.selected]=\"schema === selected\"\n         [routerLink]=\"['/netconf', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n      <i class=\"fa fa-trash remove-schema\" aria-hidden=\"true\" (click)=\"removeSchema(schema)\" title=\"Remove schema\"></i>\n      <span class=\"sr-only\" (click)=\"removeSchema(schema)\">Remove</span>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".schema-list{list-style-type:none}.schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}.schema-link.selected{color:#0068a2;font-weight:bolder}.remove-schema{cursor:pointer;margin-left:20px}.remove-schema:hover{color:red}"]
                }] }
    ];
    SchemaListComponent.ctorParameters = function () { return [
        { type: SchemasService }
    ]; };
    SchemaListComponent.propDecorators = {
        selected: [{ type: Input }]
    };
    return SchemaListComponent;
}());
export { SchemaListComponent };
if (false) {
    /** @type {?} */
    SchemaListComponent.prototype.selected;
    /** @type {?} */
    SchemaListComponent.prototype.loading;
    /** @type {?} */
    SchemaListComponent.prototype.error;
    /** @type {?} */
    SchemaListComponent.prototype.schemas;
    /** @type {?} */
    SchemaListComponent.prototype.schemasService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQ7SUFPRSw2QkFBbUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXhDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQU44QixDQUFDOzs7O0lBUXRELHNDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQzlDLFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7Ozs7UUFDRCxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQXpCLGlCQW1CQztRQWxCQyxJQUFJLE9BQU8sQ0FBQywrQkFBK0IsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUM5QyxVQUFBLEdBQUc7O29CQUNLLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztpQkFDMUI7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQzs7OztZQUNELFVBQUEsR0FBRztnQkFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsRUFDRixDQUFDO1NBQ0g7SUFFSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGtyQkFBMkM7O2lCQUU1Qzs7O2dCQU5PLGNBQWM7OzsyQkFXbkIsS0FBSzs7SUF3Q1IsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTVDWSxtQkFBbUI7OztJQUk5Qix1Q0FBdUI7O0lBRXZCLHNDQUFnQjs7SUFDaEIsb0NBQVc7O0lBQ1gsc0NBQXVCOztJQU5YLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NoZW1hc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zY2hlbWEtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlbWEtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVtYS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNjaGVtYXNTZXJ2aWNlOiBTY2hlbWFzU2VydmljZSkgeyB9XG5cbiAgQElucHV0KCkgc2VsZWN0ZWQgPSAnJztcblxuICBsb2FkaW5nID0gZmFsc2U7XG4gIGVycm9yID0gJyc7XG4gIHNjaGVtYXM6IHN0cmluZ1tdID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNjaGVtYXNTZXJ2aWNlLmdldFNjaGVtYU5hbWVzKCkuc3Vic2NyaWJlKFxuICAgIG5hbWVzID0+IHtcbiAgICAgIHRoaXMuc2NoZW1hcyA9IG5hbWVzO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmVTY2hlbWEobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGNvbmZpcm0oJ0RvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgJyArIG5hbWUgKyAnPycpKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zY2hlbWFzU2VydmljZS5yZW1vdmVTY2hlbWEobmFtZSkuc3Vic2NyaWJlKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2NoZW1hcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICAgIHRoaXMuc2NoZW1hcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=