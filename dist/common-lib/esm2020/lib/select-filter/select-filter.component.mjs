import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class SelectFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24tbGliL3NyYy9saWIvc2VsZWN0LWZpbHRlci9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbi1saWIvc3JjL2xpYi9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBTzVGLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFPa0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGlCQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztLQXlCM0Q7SUF2QlEsV0FBVyxDQUFDLENBQU07UUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3JGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sUUFBUSxDQUFDLE1BQWU7UUFDN0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JDO1NBQ0Y7YUFBTTtZQUNMLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7O2tIQTNCVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiw0UUNQbEMsb05BSUE7MkZER2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLHVCQUF1Qjs4QkFLZSxRQUFRO3NCQUF2RCxTQUFTO3VCQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBQ3RCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSztnQkFDVyxZQUFZO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlbGVjdC1maWx0ZXJhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50e1xuICBAVmlld0NoaWxkKCdpbnB1dERpdicsIHtzdGF0aWM6IGZhbHNlfSkgcHJpdmF0ZSBpbnB1dERpdjogRWxlbWVudFJlZiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnMgPSBbXTtcbiAgQElucHV0KCkgcHVibGljIGRpc3BsYXlMYWJlbD0gJyc7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmV0dXJuRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBwdWJsaWMgYXBwbHlDaGFuZ2UoZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5vcHRpb25zLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5TGFiZWwgJiYgaXRlbVt0aGlzLmRpc3BsYXlMYWJlbF0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5kaXNwbGF5TGFiZWxdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmV0dXJuRmlsdGVyLmVtaXQoZmlsdGVyKTtcbiAgfVxuICBwdWJsaWMgc2V0Rm9jdXMoaXNPcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgaWYodGhpcy5pbnB1dERpdikge1xuICAgICAgICB0aGlzLmlucHV0RGl2Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5pbnB1dERpdikge1xuICAgICAgICB0aGlzLmlucHV0RGl2Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMucmV0dXJuRmlsdGVyLmVtaXQodGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGZvcm0gY2xhc3M9XCJmaWx0ZXJhYmxlLWlucHV0LWZvcm1cIj5cbiAgPGlucHV0ICNpbnB1dERpdiBjbGFzcz1cImZpbHRlcmFibGUtaW5wdXRcIiBtYXBJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiICAoaW5wdXQpPVwiYXBwbHlDaGFuZ2UoJGV2ZW50KVwiICAoa2V5ZG93bik9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAgLz5cbjwvZm9ybT5cblxuIl19