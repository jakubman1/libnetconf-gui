import { OnInit, EventEmitter } from '@angular/core';
export declare class PopupComponent implements OnInit {
    title: string;
    toolbox: boolean;
    submitBtnText: string;
    canceled: EventEmitter<boolean>;
    submitted: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    cancel(): void;
    submit(): void;
}
