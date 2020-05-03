/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/schema-list/schema-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SchemasService } from '../../services/schemas.service';
export class SchemaListComponent {
    /**
     * @param {?} schemasService
     */
    constructor(schemasService) {
        this.schemasService = schemasService;
        this.selected = '';
        this.loading = false;
        this.error = '';
        this.schemas = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading = true;
        this.schemasService.getSchemaNames().subscribe((/**
         * @param {?} names
         * @return {?}
         */
        names => {
            this.schemas = names;
            this.loading = false;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.error = err.message;
            this.loading = false;
        }));
    }
}
SchemaListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-schema-list',
                template: "<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul>\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\" [class.selected]=\"schema === selected\"\n         [routerLink]=\"['/netconf', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n    </li>\n  </ul>\n</div>\n",
                styles: [".schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}.schema-link.selected{color:#0068a2;font-weight:bolder}"]
            }] }
];
SchemaListComponent.ctorParameters = () => [
    { type: SchemasService }
];
SchemaListComponent.propDecorators = {
    selected: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFPOUQsTUFBTTs7OztJQUVKLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV4QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFOOEIsQ0FBQzs7OztJQVF0RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQzlDLEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7OztRQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4WkFBMkM7O2FBRTVDOzs7WUFOTyxjQUFjOzs7dUJBV25CLEtBQUs7Ozs7SUFBTix1Q0FBdUI7O0lBRXZCLHNDQUFnQjs7SUFDaEIsb0NBQVc7O0lBQ1gsc0NBQXVCOztJQU5YLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NoZW1hc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVtYXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zY2hlbWEtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlbWEtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVtYS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNjaGVtYXNTZXJ2aWNlOiBTY2hlbWFzU2VydmljZSkgeyB9XG5cbiAgQElucHV0KCkgc2VsZWN0ZWQgPSAnJztcblxuICBsb2FkaW5nID0gZmFsc2U7XG4gIGVycm9yID0gJyc7XG4gIHNjaGVtYXM6IHN0cmluZ1tdID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNjaGVtYXNTZXJ2aWNlLmdldFNjaGVtYU5hbWVzKCkuc3Vic2NyaWJlKFxuICAgIG5hbWVzID0+IHtcbiAgICAgIHRoaXMuc2NoZW1hcyA9IG5hbWVzO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19