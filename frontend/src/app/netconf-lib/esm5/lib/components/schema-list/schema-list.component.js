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
    SchemaListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-schema-list',
                    template: "<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul>\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\" [class.selected]=\"schema === selected\"\n         [routerLink]=\"['/netconf', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}.schema-link.selected{color:#0068a2;font-weight:bolder}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQ7SUFPRSw2QkFBbUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXhDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQU44QixDQUFDOzs7O0lBUXRELHNDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQzlDLFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7Ozs7UUFDRCxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhaQUEyQzs7aUJBRTVDOzs7Z0JBTk8sY0FBYzs7OzJCQVduQixLQUFLOztJQW1CUiwwQkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLG1CQUFtQjs7O0lBSTlCLHVDQUF1Qjs7SUFFdkIsc0NBQWdCOztJQUNoQixvQ0FBVzs7SUFDWCxzQ0FBdUI7O0lBTlgsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY2hlbWFzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2NoZW1hcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNjaGVtYS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaGVtYS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NoZW1hLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2NoZW1hc1NlcnZpY2U6IFNjaGVtYXNTZXJ2aWNlKSB7IH1cblxuICBASW5wdXQoKSBzZWxlY3RlZCA9ICcnO1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgZXJyb3IgPSAnJztcbiAgc2NoZW1hczogc3RyaW5nW10gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2NoZW1hc1NlcnZpY2UuZ2V0U2NoZW1hTmFtZXMoKS5zdWJzY3JpYmUoXG4gICAgbmFtZXMgPT4ge1xuICAgICAgdGhpcy5zY2hlbWFzID0gbmFtZXM7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGVyciA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=