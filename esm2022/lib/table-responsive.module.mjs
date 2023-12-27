import { NgModule } from '@angular/core';
import { TableResponsiveComponent } from './components/table-responsive.component';
import { AppReactiveTableFooterComponent } from "./components/app-reactive-table-footer/app-reactive-table-footer.component";
import { ReactiveTableRowCellComponent } from "./components/reactive-table-row-cell/reactive-table-row-cell.component";
import { KeysValuesPipe } from "./pipes/keysValues.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataTableColumnDirective } from "./directive/column/column.directive";
import { DataTableColumnCellDirective } from "./directive/column/column-cell.directive";
import { TableBodyComponent } from "./components/table-body/table-body.component";
import { TableHeaderComponent } from "./components/table-header/table-header.component";
import { TableFooterComponent } from "./components/table-footer/table-footer.component";
import { DataTableColumnHeaderDirective } from "./directive/column/column-header.directive";
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export class TableResponsiveModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveModule, declarations: [TableResponsiveComponent,
            ReactiveTableRowCellComponent,
            KeysValuesPipe,
            AppReactiveTableFooterComponent,
            DataTableColumnDirective,
            DataTableColumnHeaderDirective,
            DataTableColumnCellDirective,
            TableHeaderComponent,
            TableBodyComponent,
            TableFooterComponent], imports: [BrowserModule,
            BrowserAnimationsModule,
            MatDividerModule,
            MatProgressBarModule,
            CdkDropList,
            CdkDrag], exports: [TableResponsiveComponent,
            DataTableColumnDirective,
            DataTableColumnHeaderDirective,
            DataTableColumnCellDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveModule, imports: [BrowserModule,
            BrowserAnimationsModule,
            MatDividerModule,
            MatProgressBarModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableResponsiveComponent,
                        ReactiveTableRowCellComponent,
                        KeysValuesPipe,
                        AppReactiveTableFooterComponent,
                        DataTableColumnDirective,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                        TableHeaderComponent,
                        TableBodyComponent,
                        TableFooterComponent,
                    ],
                    imports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        MatDividerModule,
                        MatProgressBarModule,
                        CdkDropList,
                        CdkDrag
                    ],
                    exports: [
                        TableResponsiveComponent,
                        DataTableColumnDirective,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvdGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSw0RUFBNEUsQ0FBQztBQUMzSCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSx3RUFBd0UsQ0FBQztBQUVySCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUUsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7O0FBK0I1RCxNQUFNLE9BQU8scUJBQXFCOytHQUFyQixxQkFBcUI7Z0hBQXJCLHFCQUFxQixpQkEzQjlCLHdCQUF3QjtZQUN4Qiw2QkFBNkI7WUFDN0IsY0FBYztZQUNkLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUU1QixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG9CQUFvQixhQUdwQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsV0FBVztZQUNYLE9BQU8sYUFHUCx3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7Z0hBR25CLHFCQUFxQixZQWQ5QixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixvQkFBb0I7OzRGQVdYLHFCQUFxQjtrQkE3QmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3dCQUM3QixjQUFjO3dCQUNkLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDRCQUE0Qjt3QkFFNUIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxPQUFPO3FCQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3dCQUM5Qiw0QkFBNEI7cUJBQzdCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlUmVzcG9uc2l2ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS1yZXNwb25zaXZlLmNvbXBvbmVudCc7XG5pbXBvcnQge0FwcFJlYWN0aXZlVGFibGVGb290ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwLXJlYWN0aXZlLXRhYmxlLWZvb3Rlci9hcHAtcmVhY3RpdmUtdGFibGUtZm9vdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWFjdGl2ZVRhYmxlUm93Q2VsbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWFjdGl2ZS10YWJsZS1yb3ctY2VsbC9yZWFjdGl2ZS10YWJsZS1yb3ctY2VsbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtLZXlzVmFsdWVzUGlwZX0gZnJvbSBcIi4vcGlwZXMva2V5c1ZhbHVlcy5waXBlXCI7XG5cbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXJcIjtcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmVcIjtcbmltcG9ydCB7RGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlL2NvbHVtbi9jb2x1bW4tY2VsbC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7VGFibGVCb2R5Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlLWJvZHkvdGFibGUtYm9keS5jb21wb25lbnRcIjtcbmltcG9ydCB7VGFibGVIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7VGFibGVGb290ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGUtZm9vdGVyL3RhYmxlLWZvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvY29sdW1uL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlXCI7XG5pbXBvcnQge0Nka0Ryb3BMaXN0LCBDZGtEcmFnfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVSZXNwb25zaXZlQ29tcG9uZW50LFxuICAgIFJlYWN0aXZlVGFibGVSb3dDZWxsQ29tcG9uZW50LFxuICAgIEtleXNWYWx1ZXNQaXBlLFxuICAgIEFwcFJlYWN0aXZlVGFibGVGb290ZXJDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlLFxuXG4gICAgVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgVGFibGVCb2R5Q29tcG9uZW50LFxuICAgIFRhYmxlRm9vdGVyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIENka0Ryb3BMaXN0LFxuICAgIENka0RyYWdcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlUmVzcG9uc2l2ZUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSZXNwb25zaXZlTW9kdWxlIHsgfVxuIl19