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
    /**
     * @param {?} name
     * @return {?}
     */
    removeSchema(name) {
        if (confirm('Do you really want to remove ' + name + '?')) {
            this.loading = true;
            this.schemasService.removeSchema(name).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                const idx = this.schemas.indexOf(name);
                this.schemas.splice(idx, 1);
                if (!res.success) {
                    this.error = res.message;
                }
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
}
SchemaListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-schema-list',
                template: "<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul class=\"schema-list\">\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\" [class.selected]=\"schema === selected\"\n         [routerLink]=\"['/netconf', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n      <i class=\"fa fa-trash remove-schema\" aria-hidden=\"true\" (click)=\"removeSchema(schema)\" title=\"Remove schema\"></i>\n      <span class=\"sr-only\" (click)=\"removeSchema(schema)\">Remove</span>\n    </li>\n  </ul>\n</div>\n",
                styles: [".schema-list{list-style-type:none}.schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}.schema-link.selected{color:#0068a2;font-weight:bolder}.remove-schema{cursor:pointer;margin-left:20px}.remove-schema:hover{color:red}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zY2hlbWEtbGlzdC9zY2hlbWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFPOUQsTUFBTTs7OztJQUVKLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV4QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFOOEIsQ0FBQzs7OztJQVF0RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQzlDLEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7OztRQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixJQUFJLE9BQU8sQ0FBQywrQkFBK0IsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUM5QyxHQUFHLENBQUMsRUFBRTs7c0JBQ0UsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDOzs7O1lBQ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQ0YsQ0FBQztTQUNIO0lBRUgsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtb0JBQTJDOzthQUU1Qzs7O1lBTk8sY0FBYzs7O3VCQVduQixLQUFLOzs7O0lBQU4sdUNBQXVCOztJQUV2QixzQ0FBZ0I7O0lBQ2hCLG9DQUFXOztJQUNYLHNDQUF1Qjs7SUFOWCw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NjaGVtYXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY2hlbWFzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2NoZW1hLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZW1hLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zY2hlbWEtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzY2hlbWFzU2VydmljZTogU2NoZW1hc1NlcnZpY2UpIHsgfVxuXG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gJyc7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBlcnJvciA9ICcnO1xuICBzY2hlbWFzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zY2hlbWFzU2VydmljZS5nZXRTY2hlbWFOYW1lcygpLnN1YnNjcmliZShcbiAgICBuYW1lcyA9PiB7XG4gICAgICB0aGlzLnNjaGVtYXMgPSBuYW1lcztcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZXJyID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlU2NoZW1hKG5hbWU6IHN0cmluZykge1xuICAgIGlmIChjb25maXJtKCdEbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlICcgKyBuYW1lICsgJz8nKSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NoZW1hc1NlcnZpY2UucmVtb3ZlU2NoZW1hKG5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNjaGVtYXMuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgICB0aGlzLnNjaGVtYXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcy5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19