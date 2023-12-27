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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableBodyComponent, selector: "app-table-body", inputs: { config: "config", columns: "columns", rows: "rows", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", rowHeight: "rowHeight", rowCount: "rowCount", pageSize: "pageSize", rowDetail: "rowDetail", rowClass: "rowClass", selected: "selected", droggableRows: "droggableRows" }, outputs: { page: "page", select: "select", onChangePositionRows: "onChangePositionRows", scroll: "scroll" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]=\"internalRows\"\r\n                               [columns]=\"columns\"\r\n                               [config]=\"config\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)=\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i4.ReactiveTableRowCellComponent, selector: "app-reactive-table-row-cell", inputs: ["data", "columns", "config", "droggableRows"], outputs: ["onClickRow", "onChangePositionRows"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-body', template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]=\"internalRows\"\r\n                               [columns]=\"columns\"\r\n                               [config]=\"config\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)=\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUXZHLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCO1FBcEJTLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBS3RCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFHekIsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyx5QkFBb0IsR0FBd0QsSUFBSSxZQUFZLEVBQXlDLENBQUM7UUFDdEksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSS9DLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOytHQS9CVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiwwZkNSL0Isc3JCQWVBOzs0RkRQYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZ0JBQWdCOzBFQUtqQixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUksSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxvQkFBb0I7c0JBQTdCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lSZXNwb25zaXZlVGFibGVDb25maWd9IGZyb20gXCIuLi90YWJsZS1yZXNwb25zaXZlLWludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGFibGUtYm9keScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBjb25maWchOiBJUmVzcG9uc2l2ZVRhYmxlQ29uZmlnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnMhOiBBcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHJvd3MhOiBBcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHNjcm9sbGJhclY6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgPSA1MDtcclxuICBASW5wdXQoKSByb3dDb3VudDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHBhZ2VTaXplITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvd0RldGFpbCE6IHtrZXlJbmRleDogc3RyaW5nLCBzaG93OiBib29sZWFuLCByb3c6IGFueX07XHJcbiAgQElucHV0KCkgcm93Q2xhc3MhOiB7a2V5SW5kZXg6IHN0cmluZywgY2xhc3NOYW1lOiBib29sZWFuLCByb3c6IGFueX07XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkcm9nZ2FibGVSb3dzITogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVBvc2l0aW9uUm93czogRXZlbnRFbWl0dGVyPEFycmF5PHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTx7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn0+PigpO1xyXG4gIEBPdXRwdXQoKSBzY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGludGVybmFsUm93cyE6IEFycmF5PGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsUm93cyA9IGNoYW5nZXNbJ3Jvd3MnXT8uY3VycmVudFZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JlY2VpdmVkOiAnLCB0aGlzLmludGVybmFsUm93cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZV90YWJsZV9oZWFkZXJfbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ0luZGljYXRvciAmJiAhcm93c1wiPlxyXG4gIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxyXG48L2Rpdj5cclxuXHJcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG5cclxuPGRpdiBjbGFzcz1cInJlc3BvbnNpdmVfdGFibGVfYm9keVwiPlxyXG4gIDxhcHAtcmVhY3RpdmUtdGFibGUtcm93LWNlbGwgW2RhdGFdPVwiaW50ZXJuYWxSb3dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ryb2dnYWJsZVJvd3NdPVwiZHJvZ2dhYmxlUm93c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VQb3NpdGlvblJvd3MpPVwib25DaGFuZ2VQb3NpdGlvblJvd3MuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrUm93KT1cInNlbGVjdC5lbWl0KCRldmVudClcIj5cclxuICA8L2FwcC1yZWFjdGl2ZS10YWJsZS1yb3ctY2VsbD5cclxuPC9kaXY+XHJcbiJdfQ==