import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/progress-bar";
import * as i4 from "../reactive-table-row-cell/reactive-table-row-cell.component";
export class TableBodyComponent {
    constructor() {
        this.scrollbarV = true;
        this.scrollbarH = false;
        this.loadingIndicator = true;
        this.rowHeight = 50;
        this.rowCount = '';
        this.selected = [];
        this.page = new EventEmitter();
        this.select = new EventEmitter();
        this.onChangePositionRows = new EventEmitter();
        this.scroll = new EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        this.internalRows = changes['rows']?.currentValue;
        console.log('received: ', this.internalRows);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableBodyComponent, selector: "app-table-body", inputs: { config: "config", columns: "columns", rows: "rows", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", rowHeight: "rowHeight", rowCount: "rowCount", pageSize: "pageSize", rowDetail: "rowDetail", rowClass: "rowClass", selected: "selected", droggableRows: "droggableRows" }, outputs: { page: "page", select: "select", onChangePositionRows: "onChangePositionRows", scroll: "scroll" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]         =\"internalRows\"\r\n                               [columns]      =\"columns\"\r\n                               [config]       =\"config\"\r\n                               [rowDetail]    =\"rowDetail\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)   =\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i4.ReactiveTableRowCellComponent, selector: "app-reactive-table-row-cell", inputs: ["data", "columns", "config", "droggableRows", "rowDetail"], outputs: ["onClickRow", "onChangePositionRows"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-body', template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]         =\"internalRows\"\r\n                               [columns]      =\"columns\"\r\n                               [config]       =\"config\"\r\n                               [rowDetail]    =\"rowDetail\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)   =\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], columns: [{
                type: Input
            }], rows: [{
                type: Input
            }], scrollbarV: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], rowCount: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], rowDetail: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], selected: [{
                type: Input
            }], droggableRows: [{
                type: Input
            }], page: [{
                type: Output
            }], select: [{
                type: Output
            }], onChangePositionRows: [{
                type: Output
            }], scroll: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU3ZHLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCO1FBcEJTLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBS3RCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFHekIsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyx5QkFBb0IsR0FBd0QsSUFBSSxZQUFZLEVBQXlDLENBQUM7UUFDdEksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSS9DLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOytHQS9CVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiwwZkNUL0IsK3dCQWdCQTs7NEZEUGEsa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLGdCQUFnQjswRUFLakIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUVJLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csb0JBQW9CO3NCQUE3QixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJUmVzcG9uc2l2ZVRhYmxlQ29uZmlnfSBmcm9tIFwiLi4vdGFibGUtcmVzcG9uc2l2ZS1pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmV9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmUvcm93LWRldGFpbC9yb3ctZGV0YWlsLmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGFibGUtYm9keScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBjb25maWchOiBJUmVzcG9uc2l2ZVRhYmxlQ29uZmlnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnMhOiBBcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHJvd3MhOiBBcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHNjcm9sbGJhclY6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgPSA1MDtcclxuICBASW5wdXQoKSByb3dDb3VudDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHBhZ2VTaXplITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvd0RldGFpbCE6IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSByb3dDbGFzcyE6IHtrZXlJbmRleDogc3RyaW5nLCBjbGFzc05hbWU6IGJvb2xlYW4sIHJvdzogYW55fTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRyb2dnYWJsZVJvd3MhOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlUG9zaXRpb25Sb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8e1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9Pj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfT4+KCk7XHJcbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaW50ZXJuYWxSb3dzITogQXJyYXk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxSb3dzID0gY2hhbmdlc1sncm93cyddPy5jdXJyZW50VmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQ6ICcsIHRoaXMuaW50ZXJuYWxSb3dzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJyZXNwb25zaXZlX3RhYmxlX2hlYWRlcl9sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nSW5kaWNhdG9yICYmICFyb3dzXCI+XHJcbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbjwvZGl2PlxyXG5cclxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcblxyXG48ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZV90YWJsZV9ib2R5XCI+XHJcbiAgPGFwcC1yZWFjdGl2ZS10YWJsZS1yb3ctY2VsbCBbZGF0YV0gICAgICAgICA9XCJpbnRlcm5hbFJvd3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbnNdICAgICAgPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXSAgICAgICA9XCJjb25maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0RldGFpbF0gICAgPVwicm93RGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkcm9nZ2FibGVSb3dzXT1cImRyb2dnYWJsZVJvd3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlUG9zaXRpb25Sb3dzKT1cIm9uQ2hhbmdlUG9zaXRpb25Sb3dzLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGlja1JvdykgICA9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCI+XHJcbiAgPC9hcHAtcmVhY3RpdmUtdGFibGUtcm93LWNlbGw+XHJcbjwvZGl2PlxyXG4iXX0=