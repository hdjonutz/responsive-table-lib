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
        console.log('received CHANGES.... ', this.internalRows);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU3ZHLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCO1FBbkJTLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUt0QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBR3pCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MseUJBQW9CLEdBQXdELElBQUksWUFBWSxFQUF5QyxDQUFDO1FBQ3RJLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUkvQyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDOytHQTlCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixrZUNUL0IsK3dCQWdCQTs7NEZEUGEsa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLGdCQUFnQjswRUFLakIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLG9CQUFvQjtzQkFBN0IsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SVJlc3BvbnNpdmVUYWJsZUNvbmZpZ30gZnJvbSBcIi4uL3RhYmxlLXJlc3BvbnNpdmUtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7RGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRhYmxlLWJvZHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1ib2R5LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY29uZmlnITogSVJlc3BvbnNpdmVUYWJsZUNvbmZpZztcclxuICBASW5wdXQoKSBjb2x1bW5zITogQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSByb3dzITogQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHJvd0NvdW50OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCkgcGFnZVNpemUhOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcm93RGV0YWlsITogRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHJvd0NsYXNzIToge2tleUluZGV4OiBzdHJpbmcsIGNsYXNzTmFtZTogYm9vbGVhbiwgcm93OiBhbnl9O1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgZHJvZ2dhYmxlUm93cyE6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VQb3NpdGlvblJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTx7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn0+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8e1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9Pj4oKTtcclxuICBAT3V0cHV0KCkgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBpbnRlcm5hbFJvd3MhOiBBcnJheTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcm5hbFJvd3MgPSBjaGFuZ2VzWydyb3dzJ10/LmN1cnJlbnRWYWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBDSEFOR0VTLi4uLiAnLCB0aGlzLmludGVybmFsUm93cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZV90YWJsZV9oZWFkZXJfbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ0luZGljYXRvciAmJiAhcm93c1wiPlxyXG4gIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxyXG48L2Rpdj5cclxuXHJcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG5cclxuPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVfdGFibGVfYm9keVwiPlxyXG4gIDxhcHAtcmVhY3RpdmUtdGFibGUtcm93LWNlbGwgW2RhdGFdICAgICAgICAgPVwiaW50ZXJuYWxSb3dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXSAgICAgID1cImNvbHVtbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ10gICAgICAgPVwiY29uZmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dEZXRhaWxdICAgID1cInJvd0RldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZHJvZ2dhYmxlUm93c109XCJkcm9nZ2FibGVSb3dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZVBvc2l0aW9uUm93cyk9XCJvbkNoYW5nZVBvc2l0aW9uUm93cy5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2xpY2tSb3cpICAgPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiPlxyXG4gIDwvYXBwLXJlYWN0aXZlLXRhYmxlLXJvdy1jZWxsPlxyXG48L2Rpdj5cclxuIl19