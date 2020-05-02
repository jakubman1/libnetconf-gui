/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.title = '';
        this.toolbox = true;
        this.submitBtnText = 'Submit';
        this.canceled = new EventEmitter();
        this.submitted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PopupComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.canceled.emit(true);
    };
    /**
     * @return {?}
     */
    PopupComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.submitted.emit(true);
    };
    PopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-nc-popup',
                    template: "\n    <div class=\"popup-wrapper\">\n      <div class=\"popup-content\">\n        <div *ngIf=\"title !== ''\" class=\"popup-header\">{{title}}</div>\n        <ng-content></ng-content>\n        <div class=\"popup-toolbox\" *ngIf=\"toolbox\">\n          <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n          <button class=\"btn btn-primary float-right\" (click)=\"submit()\">{{submitBtnText}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".popup-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:9999}.popup-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100vw;max-height:100vh;overflow:auto;padding:10px;background:#fff;border:3px solid #fff;border-radius:5px}.popup-header{width:calc(100% + 20px);margin:-10px -10px 10px;background:#008545;color:#fff;border-radius:5px 5px 0 0;padding:5px;font-size:1.3rem;text-align:center}.popup-toolbox{background:#fafafa;width:calc(100% + 20px);margin:10px -10px -20px;padding:10px}"]
                }] }
    ];
    PopupComponent.ctorParameters = function () { return []; };
    PopupComponent.propDecorators = {
        title: [{ type: Input }],
        toolbox: [{ type: Input }],
        submitBtnText: [{ type: Input }],
        canceled: [{ type: Output }],
        submitted: [{ type: Output }]
    };
    return PopupComponent;
}());
export { PopupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0Y29uZi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFO0lBeUJFO1FBUFMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixrQkFBYSxHQUFHLFFBQVEsQ0FBQztRQUV4QixhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUQsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBR3pFLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwwZEFXVDs7aUJBRUY7Ozs7d0JBR0UsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7MkJBRUwsTUFBTTs0QkFDTixNQUFNOztJQWdCVCxxQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdkJZLGNBQWM7OztJQUV6QiwrQkFBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsdUNBQWtDOztJQUVsQyxrQ0FBd0U7O0lBQ3hFLG1DQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uYy1wb3B1cCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInRpdGxlICE9PSAnJ1wiIGNsYXNzPVwicG9wdXAtaGVhZGVyXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC10b29sYm94XCIgKm5nSWY9XCJ0b29sYm94XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwiY2FuY2VsKClcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiAoY2xpY2spPVwic3VibWl0KClcIj57e3N1Ym1pdEJ0blRleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9wdXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvb2xib3ggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHN1Ym1pdEJ0blRleHQgPSAnU3VibWl0JztcclxuXHJcbiAgQE91dHB1dCgpIGNhbmNlbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5jYW5jZWxlZC5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==