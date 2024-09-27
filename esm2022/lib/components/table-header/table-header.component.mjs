import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IStates } from "../table-responsive-interface";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableHeaderComponent {
    constructor() {
        this.IStates = IStates;
        this.selectToAction = {};
        this.stateFilterText = {};
        this.selectionType = 'simple';
        this.select = new EventEmitter();
        this.onInputTextKey = new EventEmitter();
        this.onInputSortKey = new EventEmitter();
        this.addItem = new EventEmitter();
        this.refresh = new EventEmitter();
    }
    ngOnInit() {
        this.columns.forEach((k) => {
            this.selectToAction[k.key] = IStates.Nothing;
            this.stateFilterText[k.key] = '';
        });
        this.config?.defaultSorting?.forEach((k) => {
            this.selectToAction[k.key] = k.direction;
        });
    }
    ngAfterViewInit() {
        // column
        // key:  "....."
        // name: "...."
        // maxWidth:            100
        // minWidth:            30
        // remainingAutoFill:   false
        // width:               50
        // console.log(this.headerRef);
        // const width = this.headerRef?.nativeElement.clientWidth;
    }
    changeTo(nameAction, key, type) {
        this.selectToAction[key] = nameAction;
        this.onInputSortKey.emit({ direction: nameAction, key: key, type: type });
    }
    updateFilterText(event, key, format) {
        const val = event.target.value;
        this.stateFilterText[key] = val;
        this.onInputTextKey.emit({ value: val, key: key, format: format });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableHeaderComponent, selector: "app-table-header", inputs: { columns: "columns", headerHeight: "headerHeight", allRowsSelected: "allRowsSelected", selectionType: "selectionType", droggableColumns: "droggableColumns", config: "config" }, outputs: { select: "select", onInputTextKey: "onInputTextKey", onInputSortKey: "onInputSortKey", addItem: "addItem", refresh: "refresh" }, viewQueries: [{ propertyName: "headerRef", first: true, predicate: ["headerRefElement"], descendants: true }], ngImport: i0, template: "<div class=\"responsive_table_header\" style=\"{{headerHeight ? {'height': headerHeight+'px'} : ''}}\" #headerRefElement>\r\n\r\n  <div *ngFor=\"let att of columns; let i = index\"\r\n       class=\"column_responsive_table_header\"\r\n       style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};\r\n              max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};\r\n              min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">\r\n    <div class=\"header_title\">{{att['name']}}</div>\r\n\r\n\r\n    <div class=\"header_inputs_filter_sort\">\r\n      <ng-container *ngIf=\"att['key'] !=='' && !att['_headerTemplateInput']; then headFilter; else noKeyPropButtons\"></ng-container>\r\n      <ng-template #headFilter>\r\n        <div class=\"inputFilterText\" *ngIf=\"att['name'] !==''\" >\r\n          <input value=\"{{stateFilterText[att['key']]}}\" (keyup)=\"updateFilterText($event, att['key'], att['format'])\">\r\n        </div>\r\n        <div class=\"inputSortText\" *ngIf=\"att['name'] !==''\">\r\n\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.SmallerToBigger)\"\r\n               (click)=\"changeTo(IStates.Nothing, att['key'], att['type'])\">\u25B2</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.BiggerToSmaller)\"\r\n               (click)=\"changeTo(IStates.SmallerToBigger, att['key'], att['type'])\">\u25BC</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.Nothing)\"\r\n               (click)=\"changeTo(IStates.BiggerToSmaller, att['key'], att['type'])\" style=\"font-size: 15px\">\u25A1</div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #noKeyPropButtons [ngTemplateOutlet]=\"att['_headerTemplateInput']\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{display:flex;flex-direction:row;padding-right:11px;background-color:#5287bd;border-bottom:1px solid #ffffff;overflow:hidden}.allCenter,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{justify-content:center;align-items:center;justify-items:center;text-align:center}.responsive_table_header{display:flex;color:#fff;width:100%}.responsive_table_header .column_responsive_table_header{display:flex;flex-direction:column;border-right:1px solid #ffffff;padding:2px;overflow:hidden;width:100%;min-width:100px}.responsive_table_header .column_responsive_table_header:last-child{border-right:0}.responsive_table_header .column_responsive_table_header .header_title{display:flex;min-height:25px;font-size:12px;align-items:center;width:100%;height:100%}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort{display:flex;flex-direction:row}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText{display:flex}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText input{width:100%;padding:4px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{display:flex;flex-direction:column;padding:0 2px;font-size:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle{display:flex;color:#fff;height:10px;width:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle.hide{display:none}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle:hover{color:#fff;cursor:pointer}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon{background-color:#888;margin-right:2px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon:hover{cursor:pointer;background-color:#e9e9e9}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-header', template: "<div class=\"responsive_table_header\" style=\"{{headerHeight ? {'height': headerHeight+'px'} : ''}}\" #headerRefElement>\r\n\r\n  <div *ngFor=\"let att of columns; let i = index\"\r\n       class=\"column_responsive_table_header\"\r\n       style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};\r\n              max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};\r\n              min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">\r\n    <div class=\"header_title\">{{att['name']}}</div>\r\n\r\n\r\n    <div class=\"header_inputs_filter_sort\">\r\n      <ng-container *ngIf=\"att['key'] !=='' && !att['_headerTemplateInput']; then headFilter; else noKeyPropButtons\"></ng-container>\r\n      <ng-template #headFilter>\r\n        <div class=\"inputFilterText\" *ngIf=\"att['name'] !==''\" >\r\n          <input value=\"{{stateFilterText[att['key']]}}\" (keyup)=\"updateFilterText($event, att['key'], att['format'])\">\r\n        </div>\r\n        <div class=\"inputSortText\" *ngIf=\"att['name'] !==''\">\r\n\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.SmallerToBigger)\"\r\n               (click)=\"changeTo(IStates.Nothing, att['key'], att['type'])\">\u25B2</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.BiggerToSmaller)\"\r\n               (click)=\"changeTo(IStates.SmallerToBigger, att['key'], att['type'])\">\u25BC</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.Nothing)\"\r\n               (click)=\"changeTo(IStates.BiggerToSmaller, att['key'], att['type'])\" style=\"font-size: 15px\">\u25A1</div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #noKeyPropButtons [ngTemplateOutlet]=\"att['_headerTemplateInput']\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{display:flex;flex-direction:row;padding-right:11px;background-color:#5287bd;border-bottom:1px solid #ffffff;overflow:hidden}.allCenter,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{justify-content:center;align-items:center;justify-items:center;text-align:center}.responsive_table_header{display:flex;color:#fff;width:100%}.responsive_table_header .column_responsive_table_header{display:flex;flex-direction:column;border-right:1px solid #ffffff;padding:2px;overflow:hidden;width:100%;min-width:100px}.responsive_table_header .column_responsive_table_header:last-child{border-right:0}.responsive_table_header .column_responsive_table_header .header_title{display:flex;min-height:25px;font-size:12px;align-items:center;width:100%;height:100%}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort{display:flex;flex-direction:row}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText{display:flex}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText input{width:100%;padding:4px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{display:flex;flex-direction:column;padding:0 2px;font-size:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle{display:flex;color:#fff;height:10px;width:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle.hide{display:none}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle:hover{color:#fff;cursor:pointer}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon{background-color:#888;margin-right:2px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon:hover{cursor:pointer;background-color:#e9e9e9}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { columns: [{
                type: Input
            }], headerHeight: [{
                type: Input
            }], allRowsSelected: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], droggableColumns: [{
                type: Input
            }], config: [{
                type: Input
            }], select: [{
                type: Output
            }], onInputTextKey: [{
                type: Output
            }], onInputSortKey: [{
                type: Output
            }], addItem: [{
                type: Output
            }], refresh: [{
                type: Output
            }], headerRef: [{
                type: ViewChild,
                args: ['headerRefElement']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlLXJlc3BvbnNpdmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLE9BQU8sRUFBUyxNQUFNLCtCQUErQixDQUFDOzs7QUFRdEYsTUFBTSxPQUFPLG9CQUFvQjtJQXFCL0I7UUFwQm1CLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFFckMsbUJBQWMsR0FBNkIsRUFBRSxDQUFDO1FBQzlDLG9CQUFlLEdBQTRCLEVBQUUsQ0FBQztRQUtyQyxrQkFBYSxHQUFxQixRQUFRLENBQUM7UUFJMUMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHeEIsQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUErQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLDJEQUEyRDtJQUM3RCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQW1CLEVBQUUsR0FBVyxFQUFFLElBQVk7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQW9CLEVBQUUsR0FBVyxFQUFFLE1BQWM7UUFDaEUsTUFBTSxHQUFHLEdBQUksS0FBSyxDQUFDLE1BQWMsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzsrR0F2RFUsb0JBQW9CO21HQUFwQixvQkFBb0IsNGVDbkJqQywrNkRBaUNBOzs0RkRkYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usa0JBQWtCOzBFQVVuQixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFFd0IsU0FBUztzQkFBdkMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJUmVzcG9uc2l2ZVRhYmxlQ29uZmlnLCBJU3RhdGVzLCBJVHlwZXN9IGZyb20gXCIuLi90YWJsZS1yZXNwb25zaXZlLWludGVyZmFjZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRhYmxlLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IElTdGF0ZXMgPSBJU3RhdGVzO1xyXG5cclxuICBzZWxlY3RUb0FjdGlvbjoge1trZXk6IHN0cmluZ106IElTdGF0ZXN9ID0ge307XHJcbiAgc3RhdGVGaWx0ZXJUZXh0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xyXG5cclxuICBASW5wdXQoKSBjb2x1bW5zITogQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBoZWFkZXJIZWlnaHQhOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYWxsUm93c1NlbGVjdGVkITogQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiAnc2ltcGxlJ3wnbXVsdGknID0gJ3NpbXBsZSc7XHJcbiAgQElucHV0KCkgZHJvZ2dhYmxlQ29sdW1ucyE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29uZmlnITogSVJlc3BvbnNpdmVUYWJsZUNvbmZpZztcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uSW5wdXRUZXh0S2V5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbklucHV0U29ydEtleSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIGFkZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2hlYWRlclJlZkVsZW1lbnQnKSBoZWFkZXJSZWY/OiBFbGVtZW50UmVmO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoazoge2tleTogc3RyaW5nOyB0aXRsZTogc3RyaW5nfSkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdFRvQWN0aW9uW2sua2V5XSA9IElTdGF0ZXMuTm90aGluZztcclxuICAgICAgdGhpcy5zdGF0ZUZpbHRlclRleHRbay5rZXldID0gJyc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZz8uZGVmYXVsdFNvcnRpbmc/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RUb0FjdGlvbltrLmtleV0gPSBrLmRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gY29sdW1uXHJcbiAgICAvLyBrZXk6ICBcIi4uLi4uXCJcclxuICAgIC8vIG5hbWU6IFwiLi4uLlwiXHJcbiAgICAvLyBtYXhXaWR0aDogICAgICAgICAgICAxMDBcclxuICAgIC8vIG1pbldpZHRoOiAgICAgICAgICAgIDMwXHJcbiAgICAvLyByZW1haW5pbmdBdXRvRmlsbDogICBmYWxzZVxyXG4gICAgLy8gd2lkdGg6ICAgICAgICAgICAgICAgNTBcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGVhZGVyUmVmKTtcclxuICAgIC8vIGNvbnN0IHdpZHRoID0gdGhpcy5oZWFkZXJSZWY/Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUbyhuYW1lQWN0aW9uOiBJU3RhdGVzLCBrZXk6IHN0cmluZywgdHlwZTogSVR5cGVzKSB7XHJcbiAgICB0aGlzLnNlbGVjdFRvQWN0aW9uW2tleV0gPSBuYW1lQWN0aW9uO1xyXG4gICAgdGhpcy5vbklucHV0U29ydEtleS5lbWl0KHtkaXJlY3Rpb246IG5hbWVBY3Rpb24sIGtleToga2V5LCB0eXBlOiB0eXBlfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJUZXh0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBrZXk6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHZhbCA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgIHRoaXMuc3RhdGVGaWx0ZXJUZXh0W2tleV0gPSB2YWw7XHJcbiAgICB0aGlzLm9uSW5wdXRUZXh0S2V5LmVtaXQoe3ZhbHVlOiB2YWwsIGtleToga2V5LCBmb3JtYXQ6IGZvcm1hdH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZV90YWJsZV9oZWFkZXJcIiBzdHlsZT1cInt7aGVhZGVySGVpZ2h0ID8geydoZWlnaHQnOiBoZWFkZXJIZWlnaHQrJ3B4J30gOiAnJ319XCIgI2hlYWRlclJlZkVsZW1lbnQ+XHJcblxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IGF0dCBvZiBjb2x1bW5zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgIGNsYXNzPVwiY29sdW1uX3Jlc3BvbnNpdmVfdGFibGVfaGVhZGVyXCJcclxuICAgICAgIHN0eWxlPVwid2lkdGg6IHt7KGF0dFsnd2lkdGgnXSB8fCBhdHRbJ3N0eWxlJ10/Llsnd2lkdGgnXSkrJ3B4J319O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDoge3soYXR0WydtYXhXaWR0aCddIHx8IGF0dFsnc3R5bGUnXT8uWydtYXhXaWR0aCddKSsncHgnfX07XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiB7eyhhdHRbJ21pbldpZHRoJ10gfHwgYXR0WydzdHlsZSddPy5bJ21pbldpZHRoJ10pKydweCd9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlcl90aXRsZVwiPnt7YXR0WyduYW1lJ119fTwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX2lucHV0c19maWx0ZXJfc29ydFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXR0WydrZXknXSAhPT0nJyAmJiAhYXR0WydfaGVhZGVyVGVtcGxhdGVJbnB1dCddOyB0aGVuIGhlYWRGaWx0ZXI7IGVsc2Ugbm9LZXlQcm9wQnV0dG9uc1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2hlYWRGaWx0ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0RmlsdGVyVGV4dFwiICpuZ0lmPVwiYXR0WyduYW1lJ10gIT09JydcIiA+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJ7e3N0YXRlRmlsdGVyVGV4dFthdHRbJ2tleSddXX19XCIgKGtleXVwKT1cInVwZGF0ZUZpbHRlclRleHQoJGV2ZW50LCBhdHRbJ2tleSddLCBhdHRbJ2Zvcm1hdCddKVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFNvcnRUZXh0XCIgKm5nSWY9XCJhdHRbJ25hbWUnXSAhPT0nJ1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb3J0VHJpYW5nbGVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuaGlkZV09XCIhKHNlbGVjdFRvQWN0aW9uW2F0dFsna2V5J11dID09PSBJU3RhdGVzLlNtYWxsZXJUb0JpZ2dlcilcIlxyXG4gICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlVG8oSVN0YXRlcy5Ob3RoaW5nLCBhdHRbJ2tleSddLCBhdHRbJ3R5cGUnXSlcIj7ilrI8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb3J0VHJpYW5nbGVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuaGlkZV09XCIhKHNlbGVjdFRvQWN0aW9uW2F0dFsna2V5J11dID09PSBJU3RhdGVzLkJpZ2dlclRvU21hbGxlcilcIlxyXG4gICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlVG8oSVN0YXRlcy5TbWFsbGVyVG9CaWdnZXIsIGF0dFsna2V5J10sIGF0dFsndHlwZSddKVwiPuKWvDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNvcnRUcmlhbmdsZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5oaWRlXT1cIiEoc2VsZWN0VG9BY3Rpb25bYXR0WydrZXknXV0gPT09IElTdGF0ZXMuTm90aGluZylcIlxyXG4gICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlVG8oSVN0YXRlcy5CaWdnZXJUb1NtYWxsZXIsIGF0dFsna2V5J10sIGF0dFsndHlwZSddKVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4XCI+4pahPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjbm9LZXlQcm9wQnV0dG9ucyBbbmdUZW1wbGF0ZU91dGxldF09XCJhdHRbJ19oZWFkZXJUZW1wbGF0ZUlucHV0J11cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=