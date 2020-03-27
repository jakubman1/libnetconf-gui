/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ContentBoxComponent = /** @class */ (function () {
    function ContentBoxComponent() {
        this.title = '';
        this.limitWidth = false;
    }
    /**
     * @return {?}
     */
    ContentBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-content-box',
                    template: "\n    <div class=\"content-box\">\n      <div class=\"box-header\" *ngIf=\"title\">{{title}}</div>\n      <div class=\"box-content\" [class.box-content-limited]=\"limitWidth\">\n          <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    styles: [".content-box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}"]
                }] }
    ];
    ContentBoxComponent.ctorParameters = function () { return []; };
    ContentBoxComponent.propDecorators = {
        title: [{ type: Input }],
        limitWidth: [{ type: Input }]
    };
    return ContentBoxComponent;
}());
export { ContentBoxComponent };
if (false) {
    /** @type {?} */
    ContentBoxComponent.prototype.title;
    /** @type {?} */
    ContentBoxComponent.prototype.limitWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb250ZW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RDtJQWlCRTtRQUhTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRzVCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxxUEFPVDs7aUJBRUY7Ozs7d0JBR0UsS0FBSzs2QkFDTCxLQUFLOztJQVNSLDBCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FaWSxtQkFBbUI7OztJQUU5QixvQ0FBb0I7O0lBQ3BCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbnRlbnQtYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCIgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbY2xhc3MuYm94LWNvbnRlbnQtbGltaXRlZF09XCJsaW1pdFdpZHRoXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LWJveC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBsaW1pdFdpZHRoID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19