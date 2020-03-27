/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class PopupComponent {
    constructor() {
        this.title = '';
        this.toolbox = true;
        this.submitBtnText = 'Submit';
        this.canceled = new EventEmitter();
        this.submitted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    cancel() {
        this.canceled.emit(true);
    }
    /**
     * @return {?}
     */
    submit() {
        this.submitted.emit(true);
    }
}
PopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-nc-popup',
                template: `
    <div class="popup-wrapper">
      <div class="popup-content">
        <div *ngIf="title !== ''" class="popup-header">{{title}}</div>
        <ng-content></ng-content>
        <div class="popup-toolbox" *ngIf="toolbox">
          <button class="btn btn-danger" (click)="cancel()">Cancel</button>
          <button class="btn btn-primary float-right" (click)="submit()">{{submitBtnText}}</button>
        </div>
      </div>
    </div>
  `,
                styles: [".popup-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:9999}.popup-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;max-width:100vw;padding:10px;background:#fff;border:3px solid #fff;border-radius:5px}.popup-header{width:calc(100% + 20px);margin:-10px -10px 10px;background:#008545;color:#fff;border-radius:5px 5px 0 0;padding:5px;font-size:1.3rem;text-align:center}.popup-toolbox{background:#fafafa;width:calc(100% + 20px);margin:10px -10px -20px;padding:10px}"]
            }] }
];
PopupComponent.ctorParameters = () => [];
PopupComponent.propDecorators = {
    title: [{ type: Input }],
    toolbox: [{ type: Input }],
    submitBtnText: [{ type: Input }],
    canceled: [{ type: Output }],
    submitted: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PopupComponent.prototype.title;
    /** @type {?} */
    PopupComponent.prototype.toolbox;
    /** @type {?} */
    PopupComponent.prototype.submitBtnText;
    /** @type {?} */
    PopupComponent.prototype.canceled;
    /** @type {?} */
    PopupComponent.prototype.submitted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBa0I3RSxNQUFNO0lBU0o7UUFQUyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFhLEdBQUcsUUFBUSxDQUFDO1FBRXhCLGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RCxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFHekUsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUOzthQUVGOzs7O29CQUdFLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUVMLE1BQU07d0JBQ04sTUFBTTs7OztJQUxQLCtCQUFvQjs7SUFDcEIsaUNBQXdCOztJQUN4Qix1Q0FBa0M7O0lBRWxDLGtDQUF3RTs7SUFDeEUsbUNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5jLXBvcHVwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidGl0bGUgIT09ICcnXCIgY2xhc3M9XCJwb3B1cC1oZWFkZXJcIj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXRvb2xib3hcIiAqbmdJZj1cInRvb2xib3hcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJjYW5jZWwoKVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIChjbGljayk9XCJzdWJtaXQoKVwiPnt7c3VibWl0QnRuVGV4dH19PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9wb3B1cC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgdG9vbGJveCA9IHRydWU7XHJcbiAgQElucHV0KCkgc3VibWl0QnRuVGV4dCA9ICdTdWJtaXQnO1xyXG5cclxuICBAT3V0cHV0KCkgY2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLmNhbmNlbGVkLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19