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
import { ScrollingModule } from "@angular/cdk/scrolling";
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
            CdkDrag,
            ScrollingModule], exports: [TableResponsiveComponent,
            DataTableColumnDirective,
            DataTableColumnHeaderDirective,
            DataTableColumnCellDirective,
            DatatableRowDetailDirective,
            DatatableRowDetailTemplateDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveModule, imports: [BrowserModule,
            BrowserAnimationsModule,
            MatDividerModule,
            MatProgressBarModule,
            ScrollingModule] }); }
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
                        CdkDrag,
                        ScrollingModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvdGFibGUtcmVzcG9uc2l2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSw0RUFBNEUsQ0FBQztBQUMzSCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSx3RUFBd0UsQ0FBQztBQUVySCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUUsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQXNDdkQsTUFBTSxPQUFPLHFCQUFxQjsrR0FBckIscUJBQXFCO2dIQUFyQixxQkFBcUIsaUJBbEM5Qix3QkFBd0I7WUFDeEIsNkJBQTZCO1lBQzdCLGNBQWM7WUFDZCwrQkFBK0I7WUFDL0Isd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFFNUIsMkJBQTJCO1lBQzNCLG1DQUFtQztZQUVuQyxvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG9CQUFvQixhQUdwQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsV0FBVztZQUNYLE9BQU87WUFDUCxlQUFlLGFBR2Ysd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qiw4QkFBOEI7WUFDOUIsNEJBQTRCO1lBRTVCLDJCQUEyQjtZQUMzQixtQ0FBbUM7Z0hBRzFCLHFCQUFxQixZQWxCOUIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBR3BCLGVBQWU7OzRGQVlOLHFCQUFxQjtrQkFwQ2pDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3dCQUM3QixjQUFjO3dCQUNkLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDRCQUE0Qjt3QkFFNUIsMkJBQTJCO3dCQUMzQixtQ0FBbUM7d0JBRW5DLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsNEJBQTRCO3dCQUU1QiwyQkFBMkI7d0JBQzNCLG1DQUFtQztxQkFDcEM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVSZXNwb25zaXZlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLXJlc3BvbnNpdmUuY29tcG9uZW50JztcbmltcG9ydCB7QXBwUmVhY3RpdmVUYWJsZUZvb3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHAtcmVhY3RpdmUtdGFibGUtZm9vdGVyL2FwcC1yZWFjdGl2ZS10YWJsZS1mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlYWN0aXZlVGFibGVSb3dDZWxsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3JlYWN0aXZlLXRhYmxlLXJvdy1jZWxsL3JlYWN0aXZlLXRhYmxlLXJvdy1jZWxsLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge0tleXNWYWx1ZXNQaXBlfSBmcm9tIFwiLi9waXBlcy9rZXlzVmFsdWVzLnBpcGVcIjtcblxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlclwiO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhclwiO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZS9jb2x1bW4vY29sdW1uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvY29sdW1uL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtUYWJsZUJvZHlDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJsZUhlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJsZUZvb3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZS1mb290ZXIvdGFibGUtZm9vdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZS9jb2x1bW4vY29sdW1uLWhlYWRlci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7Q2RrRHJvcExpc3QsIENka0RyYWd9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlL3Jvdy1kZXRhaWwvcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7RGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvcm93LWRldGFpbC9yb3ctZGV0YWlsLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jZGsvc2Nyb2xsaW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlUmVzcG9uc2l2ZUNvbXBvbmVudCxcbiAgICBSZWFjdGl2ZVRhYmxlUm93Q2VsbENvbXBvbmVudCxcbiAgICBLZXlzVmFsdWVzUGlwZSxcbiAgICBBcHBSZWFjdGl2ZVRhYmxlRm9vdGVyQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSxcblxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcblxuICAgIFRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIFRhYmxlQm9keUNvbXBvbmVudCxcbiAgICBUYWJsZUZvb3RlckNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBDZGtEcm9wTGlzdCxcbiAgICBDZGtEcmFnLFxuICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlUmVzcG9uc2l2ZUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG5cbiAgICBEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUsXG4gICAgRGF0YXRhYmxlUm93RGV0YWlsVGVtcGxhdGVEaXJlY3RpdmUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSZXNwb25zaXZlTW9kdWxlIHsgfVxuIl19