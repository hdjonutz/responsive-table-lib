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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableBodyComponent, selector: "app-table-body", inputs: { config: "config", columns: "columns", rows: "rows", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", rowCount: "rowCount", pageSize: "pageSize", rowDetail: "rowDetail", rowClass: "rowClass", selected: "selected", droggableRows: "droggableRows" }, outputs: { page: "page", select: "select", onChangePositionRows: "onChangePositionRows", scroll: "scroll" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]         =\"internalRows\"\r\n                               [columns]      =\"columns\"\r\n                               [config]       =\"config\"\r\n                               [rowDetail]    =\"rowDetail\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)   =\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i4.ReactiveTableRowCellComponent, selector: "app-reactive-table-row-cell", inputs: ["data", "columns", "config", "droggableRows", "rowDetail"], outputs: ["onClickRow", "onChangePositionRows"] }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU3ZHLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCO1FBbkJTLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUt0QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBR3pCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MseUJBQW9CLEdBQXdELElBQUksWUFBWSxFQUF5QyxDQUFDO1FBQ3RJLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUkvQyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzsrR0E5QlUsa0JBQWtCO21HQUFsQixrQkFBa0Isa2VDVC9CLCt3QkFnQkE7OzRGRFBhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxnQkFBZ0I7MEVBS2pCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUksSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxvQkFBb0I7c0JBQTdCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lSZXNwb25zaXZlVGFibGVDb25maWd9IGZyb20gXCIuLi90YWJsZS1yZXNwb25zaXZlLWludGVyZmFjZVwiO1xyXG5pbXBvcnQge0RhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZX0gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZS9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10YWJsZS1ib2R5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtYm9keS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtYm9keS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNvbmZpZyE6IElSZXNwb25zaXZlVGFibGVDb25maWc7XHJcbiAgQElucHV0KCkgY29sdW1ucyE6IEFycmF5PGFueT47XHJcbiAgQElucHV0KCkgcm93cyE6IEFycmF5PGFueT47XHJcbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSByb3dDb3VudDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHBhZ2VTaXplITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvd0RldGFpbCE6IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSByb3dDbGFzcyE6IHtrZXlJbmRleDogc3RyaW5nLCBjbGFzc05hbWU6IGJvb2xlYW4sIHJvdzogYW55fTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRyb2dnYWJsZVJvd3MhOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlUG9zaXRpb25Sb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8e1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9Pj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfT4+KCk7XHJcbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaW50ZXJuYWxSb3dzITogQXJyYXk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxSb3dzID0gY2hhbmdlc1sncm93cyddPy5jdXJyZW50VmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQ6ICcsIHRoaXMuaW50ZXJuYWxSb3dzKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJyZXNwb25zaXZlX3RhYmxlX2hlYWRlcl9sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nSW5kaWNhdG9yICYmICFyb3dzXCI+XHJcbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbjwvZGl2PlxyXG5cclxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcblxyXG48ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZV90YWJsZV9ib2R5XCI+XHJcbiAgPGFwcC1yZWFjdGl2ZS10YWJsZS1yb3ctY2VsbCBbZGF0YV0gICAgICAgICA9XCJpbnRlcm5hbFJvd3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbnNdICAgICAgPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXSAgICAgICA9XCJjb25maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0RldGFpbF0gICAgPVwicm93RGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkcm9nZ2FibGVSb3dzXT1cImRyb2dnYWJsZVJvd3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlUG9zaXRpb25Sb3dzKT1cIm9uQ2hhbmdlUG9zaXRpb25Sb3dzLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGlja1JvdykgICA9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCI+XHJcbiAgPC9hcHAtcmVhY3RpdmUtdGFibGUtcm93LWNlbGw+XHJcbjwvZGl2PlxyXG4iXX0=