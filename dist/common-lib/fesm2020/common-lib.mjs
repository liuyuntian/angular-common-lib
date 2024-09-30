import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewChild, Input, Output, NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class CommonLibService {
    constructor() { }
}
CommonLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: CommonLibComponent, selector: "tm-common-lib", ngImport: i0, template: `
    <p>
      common-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tm-common-lib', template: `
    <p>
      common-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class SelectFilterComponent {
    constructor() {
        this.options = [];
        this.displayLabel = '';
        this.returnFilter = new EventEmitter();
    }
    applyChange(e) {
        const filter = this.options.filter((item) => {
            if (this.displayLabel && item[this.displayLabel]) {
                return item[this.displayLabel].toLowerCase().includes(e.target.value.toLowerCase());
            }
            else {
                return item.toLowerCase().includes(e.target.value.toLowerCase());
            }
        });
        this.returnFilter.emit(filter);
    }
    setFocus(isOpen) {
        if (isOpen) {
            if (this.inputDiv) {
                this.inputDiv.nativeElement.focus();
            }
        }
        else {
            if (this.inputDiv) {
                this.inputDiv.nativeElement.value = '';
            }
            this.returnFilter.emit(this.options);
        }
    }
}
SelectFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SelectFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: SelectFilterComponent, selector: "app-select-filterable", inputs: { options: "options", displayLabel: "displayLabel" }, outputs: { returnFilter: "returnFilter" }, viewQueries: [{ propertyName: "inputDiv", first: true, predicate: ["inputDiv"], descendants: true }], ngImport: i0, template: "<form class=\"filterable-input-form\">\n  <input #inputDiv class=\"filterable-input\" mapInput placeholder=\"Search...\"  (input)=\"applyChange($event)\"  (keydown)=\"$event.stopPropagation()\"  />\n</form>\n\n", styles: [".filterable-input-form{position:sticky;top:0;z-index:100;font-size:inherit;box-shadow:none;border-radius:0;padding:14px;box-sizing:border-box;border-bottom:1px solid grey;background-color:#fff}.filterable-input-form .filterable-input{appearance:none;outline:0;border:0;background-color:unset;color:gray;width:100%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SelectFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select-filterable', template: "<form class=\"filterable-input-form\">\n  <input #inputDiv class=\"filterable-input\" mapInput placeholder=\"Search...\"  (input)=\"applyChange($event)\"  (keydown)=\"$event.stopPropagation()\"  />\n</form>\n\n", styles: [".filterable-input-form{position:sticky;top:0;z-index:100;font-size:inherit;box-shadow:none;border-radius:0;padding:14px;box-sizing:border-box;border-bottom:1px solid grey;background-color:#fff}.filterable-input-form .filterable-input{appearance:none;outline:0;border:0;background-color:unset;color:gray;width:100%}\n"] }]
        }], propDecorators: { inputDiv: [{
                type: ViewChild,
                args: ['inputDiv', { static: false }]
            }], options: [{
                type: Input
            }], displayLabel: [{
                type: Input
            }], returnFilter: [{
                type: Output
            }] } });

class CommonLibModule {
}
CommonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: CommonLibModule, declarations: [CommonLibComponent,
        SelectFilterComponent], imports: [MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule], exports: [CommonLibComponent,
        SelectFilterComponent] });
CommonLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibModule, imports: [MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonLibComponent,
                        SelectFilterComponent
                    ],
                    imports: [
                        MatSelectModule,
                        MatOptionModule,
                        BrowserAnimationsModule,
                    ],
                    exports: [
                        CommonLibComponent,
                        SelectFilterComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonLibComponent, CommonLibModule, CommonLibService, SelectFilterComponent };
//# sourceMappingURL=common-lib.mjs.map
