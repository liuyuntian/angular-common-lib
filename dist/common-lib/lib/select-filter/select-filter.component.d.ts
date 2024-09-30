import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SelectFilterComponent {
    private inputDiv;
    options: never[];
    displayLabel: string;
    returnFilter: EventEmitter<any[]>;
    applyChange(e: any): void;
    setFocus(isOpen: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectFilterComponent, "app-select-filterable", never, { "options": "options"; "displayLabel": "displayLabel"; }, { "returnFilter": "returnFilter"; }, never, never, false>;
}
