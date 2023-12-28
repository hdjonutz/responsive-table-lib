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
import { DatatableRowDetailTemplateDirective } from "./directive/row-detail/row-detail-template.directive";
import { DatatableRowDetailDirective } from "./directive/row-detail/row-detail.directive";
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
            DatatableRowDetailDirective,
            DatatableRowDetailTemplateDirective,
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
            DataTableColumnCellDirective,
            DatatableRowDetailDirective,
            DatatableRowDetailTemplateDirective] }); }
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
                        DatatableRowDetailDirective,
                        DatatableRowDetailTemplateDirective,
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
                        DatatableRowDetailDirective,
                        DatatableRowDetailTemplateDirective,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvdGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSw0RUFBNEUsQ0FBQztBQUMzSCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSx3RUFBd0UsQ0FBQztBQUVySCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUUsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBcUN4RixNQUFNLE9BQU8scUJBQXFCOytHQUFyQixxQkFBcUI7Z0hBQXJCLHFCQUFxQixpQkFqQzlCLHdCQUF3QjtZQUN4Qiw2QkFBNkI7WUFDN0IsY0FBYztZQUNkLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUU1QiwyQkFBMkI7WUFDM0IsbUNBQW1DO1lBRW5DLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsb0JBQW9CLGFBR3BCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsT0FBTyxhQUdQLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUU1QiwyQkFBMkI7WUFDM0IsbUNBQW1DO2dIQUcxQixxQkFBcUIsWUFqQjlCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjs7NEZBY1gscUJBQXFCO2tCQW5DakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLGNBQWM7d0JBQ2QsK0JBQStCO3dCQUMvQix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsNEJBQTRCO3dCQUU1QiwyQkFBMkI7d0JBQzNCLG1DQUFtQzt3QkFFbkMsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxPQUFPO3FCQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3dCQUM5Qiw0QkFBNEI7d0JBRTVCLDJCQUEyQjt3QkFDM0IsbUNBQW1DO3FCQUNwQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZVJlc3BvbnNpdmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUtcmVzcG9uc2l2ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBcHBSZWFjdGl2ZVRhYmxlRm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC1yZWFjdGl2ZS10YWJsZS1mb290ZXIvYXBwLXJlYWN0aXZlLXRhYmxlLWZvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVhY3RpdmVUYWJsZVJvd0NlbGxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVhY3RpdmUtdGFibGUtcm93LWNlbGwvcmVhY3RpdmUtdGFibGUtcm93LWNlbGwuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7S2V5c1ZhbHVlc1BpcGV9IGZyb20gXCIuL3BpcGVzL2tleXNWYWx1ZXMucGlwZVwiO1xuXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyXCI7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyXCI7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0RhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlL2NvbHVtbi9jb2x1bW4uZGlyZWN0aXZlXCI7XG5pbXBvcnQge0RhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZS9jb2x1bW4vY29sdW1uLWNlbGwuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1RhYmxlQm9keUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYmxlSGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYmxlRm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlLWZvb3Rlci90YWJsZS1mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGFUYWJsZUNvbHVtbkhlYWRlckRpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlL2NvbHVtbi9jb2x1bW4taGVhZGVyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtDZGtEcm9wTGlzdCwgQ2RrRHJhZ30gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0RhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvcm93LWRldGFpbC9yb3ctZGV0YWlsLXRlbXBsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZS9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlUmVzcG9uc2l2ZUNvbXBvbmVudCxcbiAgICBSZWFjdGl2ZVRhYmxlUm93Q2VsbENvbXBvbmVudCxcbiAgICBLZXlzVmFsdWVzUGlwZSxcbiAgICBBcHBSZWFjdGl2ZVRhYmxlRm9vdGVyQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSxcblxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcblxuICAgIFRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFRhYmxlQm9keUNvbXBvbmVudCxcbiAgICBUYWJsZUZvb3RlckNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBDZGtEcm9wTGlzdCxcbiAgICBDZGtEcmFnXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZVJlc3BvbnNpdmVDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlLFxuXG4gICAgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlLFxuICAgIERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlUmVzcG9uc2l2ZU1vZHVsZSB7IH1cbiJdfQ==