/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ContentBoxComponent {
    constructor() {
        this.title = '';
        this.limitWidth = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-content-box',
                template: `
    <div class="content-box">
      <div class="box-header" *ngIf="title">{{title}}</div>
      <div class="box-content" [class.box-content-limited]="limitWidth">
          <ng-content></ng-content>
      </div>
    </div>
  `,
                styles: [".content-box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}"]
            }] }
];
ContentBoxComponent.ctorParameters = () => [];
ContentBoxComponent.propDecorators = {
    title: [{ type: Input }],
    limitWidth: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContentBoxComponent.prototype.title;
    /** @type {?} */
    ContentBoxComponent.prototype.limitWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb250ZW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWN2RCxNQUFNO0lBS0o7UUFIUyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUc1QixDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7O2FBRUY7Ozs7b0JBR0UsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sb0NBQW9COztJQUNwQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb250ZW50LWJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiICpuZ0lmPVwidGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW2NsYXNzLmJveC1jb250ZW50LWxpbWl0ZWRdPVwibGltaXRXaWR0aFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGVudC1ib3guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgbGltaXRXaWR0aCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==