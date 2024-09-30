import { NgModule } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import * as i0 from "@angular/core";
export class CommonLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb24tbGliL3NyYy9saWIvY29tbW9uLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQW1CN0UsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxpQkFieEIsa0JBQWtCO1FBQ2xCLHFCQUFxQixhQUdyQixlQUFlO1FBQ2YsZUFBZTtRQUNmLHVCQUF1QixhQUd2QixrQkFBa0I7UUFDbEIscUJBQXFCOzZHQUdaLGVBQWUsWUFUeEIsZUFBZTtRQUNmLGVBQWU7UUFDZix1QkFBdUI7MkZBT2QsZUFBZTtrQkFmM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkxpYkNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQge01hdE9wdGlvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbW1vbkxpYkNvbXBvbmVudCxcbiAgICBTZWxlY3RGaWx0ZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRPcHRpb25Nb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25MaWJDb21wb25lbnQsXG4gICAgU2VsZWN0RmlsdGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTGliTW9kdWxlIHsgfVxuIl19