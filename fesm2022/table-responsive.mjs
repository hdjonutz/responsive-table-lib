import * as i0 from '@angular/core';
import { Directive, TemplateRef, Input, ContentChild, Injectable, EventEmitter, Output, Component, ViewChild, ContentChildren, Pipe, NgModule } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i1 from '@angular/common';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i3$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i3 from '@angular/cdk/drag-drop';
import { moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var IStates;
(function (IStates) {
    IStates[IStates["SmallerToBigger"] = 0] = "SmallerToBigger";
    IStates[IStates["BiggerToSmaller"] = 1] = "BiggerToSmaller";
    IStates[IStates["Nothing"] = 2] = "Nothing";
})(IStates || (IStates = {}));
var ITypes;
(function (ITypes) {
    ITypes["string"] = "string";
    ITypes["number"] = "number";
})(ITypes || (ITypes = {}));
var SelectionType;
(function (SelectionType) {
    SelectionType["multi"] = "multi";
    SelectionType["simple"] = "simple";
})(SelectionType || (SelectionType = {}));

class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DataTableColumnCellDirective, selector: "[lib-table-responsive-cell-template]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnCellDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[lib-table-responsive-cell-template]' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnHeaderDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DataTableColumnHeaderDirective, selector: "[lib-table-responsive-header-template]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[lib-table-responsive-header-template]' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class DataTableColumnDirective {
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DataTableColumnDirective, selector: "lib-table-responsive-column", inputs: { name: "name", key: "key", type: "type", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", style: "style", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: DataTableColumnCellDirective, descendants: true, read: TemplateRef }, { propertyName: "_headerTemplateQuery", first: true, predicate: DataTableColumnHeaderDirective, descendants: true, read: TemplateRef }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'lib-table-responsive-column' }]
        }], propDecorators: { name: [{
                type: Input
            }], key: [{
                type: Input
            }], type: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], style: [{
                type: Input
            }], _cellTemplateInput: [{
                type: Input,
                args: ['cellTemplate']
            }], _cellTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnCellDirective, { read: TemplateRef, static: false }]
            }], _headerTemplateInput: [{
                type: Input,
                args: ['headerTemplate']
            }], _headerTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: false }]
            }] } });

class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DatatableRowDetailTemplateDirective, selector: "[lib-table-responsive-row-detail-template]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[lib-table-responsive-row-detail-template]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class RowsService {
    constructor() {
        this.rowsExpandedObservable = new ReplaySubject(1);
        this.rowsExpanded = [];
        this.rowsExpandedObservable.next(this.rowsExpanded);
    }
    setRows(row) {
        const found = this.isExpanded(row);
        if (found) {
            this.rowsExpanded = this.rowsExpanded.filter((r) => JSON.stringify(row) !== JSON.stringify(r));
        }
        else {
            this.rowsExpanded.push(row);
        }
        this.rowsExpandedObservable.next(this.rowsExpanded);
    }
    isExpanded(row) {
        return !!this.rowsExpanded.find((r) => JSON.stringify(row) === JSON.stringify(r));
    }
    getChanges() {
        return this.rowsExpandedObservable;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });

class DatatableRowDetailDirective {
    constructor(rowService) {
        this.rowService = rowService;
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    // this will be from outside called onClick button
    toggleExpandRow(row) {
        this.toggle?.emit({ value: row });
        this.rowService.setRows(row);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailDirective, deps: [{ token: RowsService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DatatableRowDetailDirective, selector: "lib-table-responsive-row-detail", inputs: { _templateInput: ["template", "_templateInput"], rowDetailHeight: "rowDetailHeight" }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: DatatableRowDetailTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'lib-table-responsive-row-detail' }]
        }], ctorParameters: function () { return [{ type: RowsService }]; }, propDecorators: { toggle: [{
                type: Output
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true }]
            }], rowDetailHeight: [{
                type: Input,
                args: ['rowDetailHeight']
            }] } });

class TableHeaderComponent {
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
    updateFilterText(event, key) {
        const val = event.target.value;
        this.stateFilterText[key] = val;
        this.onInputTextKey.emit({ value: val, key: key });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableHeaderComponent, selector: "app-table-header", inputs: { columns: "columns", headerHeight: "headerHeight", allRowsSelected: "allRowsSelected", selectionType: "selectionType", droggableColumns: "droggableColumns" }, outputs: { select: "select", onInputTextKey: "onInputTextKey", onInputSortKey: "onInputSortKey", addItem: "addItem", refresh: "refresh" }, viewQueries: [{ propertyName: "headerRef", first: true, predicate: ["headerRefElement"], descendants: true }], ngImport: i0, template: "<div class=\"responsive_table_header\" style=\"{{headerHeight ? {'height': headerHeight+'px'} : ''}}\" #headerRefElement>\r\n\r\n  <div *ngFor=\"let att of columns; let i = index\"\r\n       class=\"column_responsive_table_header\"\r\n       style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};\r\n              max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};\r\n              min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">\r\n    <div class=\"header_title\">{{att['name']}}</div>\r\n\r\n\r\n    <div class=\"header_inputs_filter_sort\">\r\n      <ng-container *ngIf=\"att['key'] !=='' && !att['_headerTemplateInput']; then headFilter; else noKeyPropButtons\"></ng-container>\r\n      <ng-template #headFilter>\r\n        <div class=\"inputFilterText\" *ngIf=\"att['name'] !==''\" >\r\n          <input value=\"{{stateFilterText[att['key']]}}\" (keyup)=\"updateFilterText($event, att['key'])\">\r\n        </div>\r\n        <div class=\"inputSortText\" *ngIf=\"att['name'] !==''\">\r\n\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.SmallerToBigger)\"\r\n               (click)=\"changeTo(IStates.Nothing, att['key'], att['type'])\">\u25B2</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.BiggerToSmaller)\"\r\n               (click)=\"changeTo(IStates.SmallerToBigger, att['key'], att['type'])\">\u25BC</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.Nothing)\"\r\n               (click)=\"changeTo(IStates.BiggerToSmaller, att['key'], att['type'])\" style=\"font-size: 15px\">\u25A1</div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #noKeyPropButtons [ngTemplateOutlet]=\"att['_headerTemplateInput']\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{display:flex;flex-direction:row;padding-right:11px;background-color:#5287bd;border-bottom:1px solid #ffffff;overflow:hidden}.allCenter,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{justify-content:center;align-items:center;justify-items:center;text-align:center}.responsive_table_header{display:flex;color:#fff;width:100%}.responsive_table_header .column_responsive_table_header{display:flex;flex-direction:column;border-right:1px solid #ffffff;padding:2px;overflow:hidden;width:100%;min-width:100px}.responsive_table_header .column_responsive_table_header:last-child{border-right:0}.responsive_table_header .column_responsive_table_header .header_title{display:flex;min-height:25px;font-size:12px;align-items:center;width:100%;height:100%}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort{display:flex;flex-direction:row}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText{display:flex}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText input{width:100%;padding:4px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{display:flex;flex-direction:column;padding:0 2px;font-size:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle{display:flex;color:#fff;height:10px;width:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle.hide{display:none}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle:hover{color:#fff;cursor:pointer}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon{background-color:#888;margin-right:2px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon:hover{cursor:pointer;background-color:#e9e9e9}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-header', template: "<div class=\"responsive_table_header\" style=\"{{headerHeight ? {'height': headerHeight+'px'} : ''}}\" #headerRefElement>\r\n\r\n  <div *ngFor=\"let att of columns; let i = index\"\r\n       class=\"column_responsive_table_header\"\r\n       style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};\r\n              max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};\r\n              min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">\r\n    <div class=\"header_title\">{{att['name']}}</div>\r\n\r\n\r\n    <div class=\"header_inputs_filter_sort\">\r\n      <ng-container *ngIf=\"att['key'] !=='' && !att['_headerTemplateInput']; then headFilter; else noKeyPropButtons\"></ng-container>\r\n      <ng-template #headFilter>\r\n        <div class=\"inputFilterText\" *ngIf=\"att['name'] !==''\" >\r\n          <input value=\"{{stateFilterText[att['key']]}}\" (keyup)=\"updateFilterText($event, att['key'])\">\r\n        </div>\r\n        <div class=\"inputSortText\" *ngIf=\"att['name'] !==''\">\r\n\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.SmallerToBigger)\"\r\n               (click)=\"changeTo(IStates.Nothing, att['key'], att['type'])\">\u25B2</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.BiggerToSmaller)\"\r\n               (click)=\"changeTo(IStates.SmallerToBigger, att['key'], att['type'])\">\u25BC</div>\r\n          <div class=\"sortTriangle\"\r\n               [class.hide]=\"!(selectToAction[att['key']] === IStates.Nothing)\"\r\n               (click)=\"changeTo(IStates.BiggerToSmaller, att['key'], att['type'])\" style=\"font-size: 15px\">\u25A1</div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #noKeyPropButtons [ngTemplateOutlet]=\"att['_headerTemplateInput']\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{display:flex;flex-direction:row;padding-right:11px;background-color:#5287bd;border-bottom:1px solid #ffffff;overflow:hidden}.allCenter,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle,.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{justify-content:center;align-items:center;justify-items:center;text-align:center}.responsive_table_header{display:flex;color:#fff;width:100%}.responsive_table_header .column_responsive_table_header{display:flex;flex-direction:column;border-right:1px solid #ffffff;padding:2px;overflow:hidden;width:100%;min-width:100px}.responsive_table_header .column_responsive_table_header:last-child{border-right:0}.responsive_table_header .column_responsive_table_header .header_title{display:flex;min-height:25px;font-size:12px;align-items:center;width:100%;height:100%}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort{display:flex;flex-direction:row}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText{display:flex}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputFilterText input{width:100%;padding:4px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText{display:flex;flex-direction:column;padding:0 2px;font-size:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle{display:flex;color:#fff;height:10px;width:10px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle.hide{display:none}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .inputSortText .sortTriangle:hover{color:#fff;cursor:pointer}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon{background-color:#888;margin-right:2px}.responsive_table_header .column_responsive_table_header .header_inputs_filter_sort .header_buttons mat-icon:hover{cursor:pointer;background-color:#e9e9e9}\n"] }]
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

class ReactiveTableRowCellComponent {
    constructor(tableBody, rowService) {
        this.rowService = rowService;
        this.rowClickIndex = null;
        this.rowsExpanded = [];
        this.onClickRow = new EventEmitter();
        this.onChangePositionRows = new EventEmitter();
        this._tableBody = tableBody;
    }
    ngOnInit() {
        this.rowsObs = this.rowService.getChanges().subscribe((res) => this.rowsExpanded = res);
    }
    ngOnDestroy() {
        this.rowsObs?.unsubscribe();
    }
    updateOnClickRow(row, cell, index, key) {
        this.rowClickIndex = index;
        this.onClickRow?.emit({ row: row, item: cell, index: index, key: key });
    }
    ngOnChanges(changes) {
        if (changes?.['data'].currentValue) {
            this.dataToDisplay = [...changes?.['data'].currentValue];
        }
    }
    drop(event) {
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.onChangePositionRows?.emit(this.data);
    }
    getRowHeight(row) {
        const styleRow = { 'flex-direction': 'column' };
        if (this.config.rowHeight) {
            Object.assign(styleRow, { height: this.config.rowHeight + 'px' });
        }
        if (this.config.rowMinHeight) {
            Object.assign(styleRow, { 'min-height': this.config.rowMinHeight + 'px' });
        }
        if (this.config.rowMaxHeight) {
            Object.assign(styleRow, { 'max-height': this.config.rowMaxHeight + 'px', overflow: 'hidden' });
        }
        if (this.getIsExpanded(row) && this.rowDetail) {
            Object.assign(styleRow, { height: this.rowDetail.rowDetailHeight + 'px' });
        }
        return styleRow;
    }
    getCellWidth(att) {
        const styleCell = {};
        if (att['width'] || att['style']?.['width']) {
            Object.assign(styleCell, { width: (att['width'] || att['style']?.['width']) + 'px' });
        }
        if (att['maxWidth'] || att['style']?.['maxWidth']) {
            Object.assign(styleCell, { 'max-width': (att['maxWidth'] || att['style']?.['maxWidth']) + 'px' });
        }
        if (att['minWidth'] || att['style']?.['minWidth']) {
            Object.assign(styleCell, { 'min-width': (att['minWidth'] || att['style']?.['minWidth']) + 'px' });
        }
        if (this.config.rowMaxHeight) {
            Object.assign(styleCell, { 'max-height': this.config.rowMaxHeight + 'px' }); // 'align-items': 'baseline'
        }
        return styleCell;
    }
    getIsExpanded(row) {
        return !!this.rowsExpanded.find((r) => JSON.stringify(row) === JSON.stringify(r));
    }
    stopOnMoved(event) {
        debugger;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ReactiveTableRowCellComponent, deps: [{ token: i0.ElementRef }, { token: RowsService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ReactiveTableRowCellComponent, selector: "app-reactive-table-row-cell", inputs: { data: "data", columns: "columns", config: "config", droggableRows: "droggableRows", rowDetail: "rowDetail" }, outputs: { onClickRow: "onClickRow", onChangePositionRows: "onChangePositionRows" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table_rows\">\n\n  <div class=\"responsive_table_header_loading\" *ngIf=\"config && dataToDisplay?.length === 0\">\n    {{config.messageTableNoData}}\n  </div>\n\n<!--  <div class=\"responsive_table_row\">-->\n<!--    <div *ngFor=\"let att of columns;\" class=\"responsive_table_row_cell\"-->\n<!--         style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};-->\n<!--            max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};-->\n<!--            min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">[xxx]</div>-->\n<!--  </div>-->\n\n  <ng-container *ngIf=\"droggableRows; then templateDroggrable; else templateSimple\"></ng-container>\n  <ng-template #templateDroggrable>\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n      <div *ngFor=\"let row of dataToDisplay; let i = index\"\n           class=\"responsive_table_row example-box\"\n           cdkDragBoundary=\"responsive_table_rows\"\n           cdkDrag\n           style=\"{{getRowHeight(row)}}\"\n           (cdkDragMoved)=\"stopOnMoved($event)\"\n           [class.selected] = \"rowClickIndex == i\"\n      >\n        <div class=\"simple_row\">\n          <ng-container *ngFor=\"let att of columns;\">\n            <div class=\"responsive_table_row_cell\"\n                 (click)=\"updateOnClickRow(row, row[att.key], i, att.key)\"\n                 style=\"{{getCellWidth(att)}}\"\n            >\n              <ng-container *ngIf=\"row[att.key] !== undefined; then _fullCell\"></ng-container>\n              <ng-template #_fullCell\n                           [ngTemplateOutlet]=\"att.cellTemplate\"\n                           [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: row[att.key], column: att.key, rowIndex: i}\">\n                <div *ngIf=\"!att.cellTemplate\">{{row[att.key]}}</div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </div>\n\n        <div *ngIf=\"rowDetail && rowDetail.template && getIsExpanded(row)\" class=\"detail_row\" style=\"height:{{rowDetail?.rowDetailHeight+'px'}}\">\n          <ng-container [ngTemplateOutlet]=\"rowDetail.template\"\n                        [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: null, column: null, rowIndex: i}\"></ng-container>\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #templateSimple>\n    <div *ngFor=\"let row of dataToDisplay; let i = index\"\n         class=\"responsive_table_row\"\n         style=\"{{getRowHeight(row)}}\"\n         [class.selected] = \"rowClickIndex == i\">\n\n      <div class=\"simple_row\">\n        <ng-container *ngFor=\"let att of columns;\">\n          <div class=\"responsive_table_row_cell\"\n               (click)=\"updateOnClickRow(row, row[att.key], i, att.key)\"\n               style=\"{{getCellWidth(att)}}\"\n          >\n            <ng-container *ngIf=\"row[att.key] !== undefined; then fullCell\"></ng-container>\n            <ng-template #fullCell\n                         [ngTemplateOutlet]=\"att.cellTemplate\"\n                         [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: row[att.key], column: att.key, rowIndex: i}\">\n              <div *ngIf=\"!att.cellTemplate\">{{row[att.key]}}</div>\n            </ng-template>\n          </div>\n        </ng-container>\n      </div>\n\n      <div *ngIf=\"rowDetail && rowDetail.template && getIsExpanded(row)\" class=\"detail_row\" style=\"height:{{rowDetail?.rowDetailHeight+'px'}}\">\n        <ng-container [ngTemplateOutlet]=\"rowDetail.template\"\n                      [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: null, column: null, rowIndex: i}\"></ng-container>\n      </div>\n\n    </div>\n\n  </ng-template>\n\n</div>\n", styles: [".flex_column,.responsive_table_rows,:host,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{overflow-y:scroll;overflow-x:hidden}.responsive_table_rows .responsive_table_header_loading{display:flex;justify-content:center}.responsive_table_rows .responsive_table_row{display:flex;flex-direction:row;width:100%;border-bottom:1px solid #e9e9e9}.responsive_table_rows .responsive_table_row:nth-child(2n){background-color:#dee8f380}.responsive_table_rows .responsive_table_row:nth-child(odd){background-color:#f1f5fa80}.responsive_table_rows .responsive_table_row:hover{background-color:#c1d4e780;cursor:pointer}.responsive_table_rows .responsive_table_row.selected{background-color:#9cbad980}.responsive_table_rows .responsive_table_row .simple_row{flex-direction:row;display:flex;width:100%;height:100%}.responsive_table_rows .responsive_table_row .detail_row{box-shadow:inset 0 0 1px 1px #9cbad980;flex-direction:row;display:flex;width:100%}.responsive_table_rows .responsive_table_row .responsive_table_row_cell{display:flex;width:100%;min-width:100px;padding:2px;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center;font-size:14px}.responsive_table_rows .responsive_table_row .responsive_table_row_cell.hide{visibility:hidden}.responsive_table_rows .responsive_table_row .responsive_table_row_cell:last-child{border-right:none}.responsive_table_rows .example-list .example-box{cursor:move}.responsive_table_rows .cdk-drag-preview{background-color:red;box-sizing:border-box;height:50px;display:flex;width:100%;flex-direction:row;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.responsive_table_rows .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder):nth-child(2n){background-color:#e2b38e}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder):nth-child(odd){background-color:#e8c0a2}::ng-deep .cdk-drag{background-color:#5287bd}::ng-deep .cdk-drag.responsive_table_row.cdk-drag-preview{background-color:#bc8ce8;display:flex;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center}::ng-deep .cdk-drag.responsive_table_row.cdk-drag-preview .simple_row{flex-direction:row;display:flex;width:100%;height:100%}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell{display:flex;width:100%;min-width:100px;padding:2px;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell.hide{visibility:hidden}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell:last-child{border-right:none}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i3.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ReactiveTableRowCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-reactive-table-row-cell', template: "<div class=\"responsive_table_rows\">\n\n  <div class=\"responsive_table_header_loading\" *ngIf=\"config && dataToDisplay?.length === 0\">\n    {{config.messageTableNoData}}\n  </div>\n\n<!--  <div class=\"responsive_table_row\">-->\n<!--    <div *ngFor=\"let att of columns;\" class=\"responsive_table_row_cell\"-->\n<!--         style=\"width: {{(att['width'] || att['style']?.['width'])+'px'}};-->\n<!--            max-width: {{(att['maxWidth'] || att['style']?.['maxWidth'])+'px'}};-->\n<!--            min-width: {{(att['minWidth'] || att['style']?.['minWidth'])+'px'}}\">[xxx]</div>-->\n<!--  </div>-->\n\n  <ng-container *ngIf=\"droggableRows; then templateDroggrable; else templateSimple\"></ng-container>\n  <ng-template #templateDroggrable>\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n      <div *ngFor=\"let row of dataToDisplay; let i = index\"\n           class=\"responsive_table_row example-box\"\n           cdkDragBoundary=\"responsive_table_rows\"\n           cdkDrag\n           style=\"{{getRowHeight(row)}}\"\n           (cdkDragMoved)=\"stopOnMoved($event)\"\n           [class.selected] = \"rowClickIndex == i\"\n      >\n        <div class=\"simple_row\">\n          <ng-container *ngFor=\"let att of columns;\">\n            <div class=\"responsive_table_row_cell\"\n                 (click)=\"updateOnClickRow(row, row[att.key], i, att.key)\"\n                 style=\"{{getCellWidth(att)}}\"\n            >\n              <ng-container *ngIf=\"row[att.key] !== undefined; then _fullCell\"></ng-container>\n              <ng-template #_fullCell\n                           [ngTemplateOutlet]=\"att.cellTemplate\"\n                           [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: row[att.key], column: att.key, rowIndex: i}\">\n                <div *ngIf=\"!att.cellTemplate\">{{row[att.key]}}</div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </div>\n\n        <div *ngIf=\"rowDetail && rowDetail.template && getIsExpanded(row)\" class=\"detail_row\" style=\"height:{{rowDetail?.rowDetailHeight+'px'}}\">\n          <ng-container [ngTemplateOutlet]=\"rowDetail.template\"\n                        [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: null, column: null, rowIndex: i}\"></ng-container>\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #templateSimple>\n    <div *ngFor=\"let row of dataToDisplay; let i = index\"\n         class=\"responsive_table_row\"\n         style=\"{{getRowHeight(row)}}\"\n         [class.selected] = \"rowClickIndex == i\">\n\n      <div class=\"simple_row\">\n        <ng-container *ngFor=\"let att of columns;\">\n          <div class=\"responsive_table_row_cell\"\n               (click)=\"updateOnClickRow(row, row[att.key], i, att.key)\"\n               style=\"{{getCellWidth(att)}}\"\n          >\n            <ng-container *ngIf=\"row[att.key] !== undefined; then fullCell\"></ng-container>\n            <ng-template #fullCell\n                         [ngTemplateOutlet]=\"att.cellTemplate\"\n                         [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: row[att.key], column: att.key, rowIndex: i}\">\n              <div *ngIf=\"!att.cellTemplate\">{{row[att.key]}}</div>\n            </ng-template>\n          </div>\n        </ng-container>\n      </div>\n\n      <div *ngIf=\"rowDetail && rowDetail.template && getIsExpanded(row)\" class=\"detail_row\" style=\"height:{{rowDetail?.rowDetailHeight+'px'}}\">\n        <ng-container [ngTemplateOutlet]=\"rowDetail.template\"\n                      [ngTemplateOutletContext]=\"{row: row, expanded: getIsExpanded(row), value: null, column: null, rowIndex: i}\"></ng-container>\n      </div>\n\n    </div>\n\n  </ng-template>\n\n</div>\n", styles: [".flex_column,.responsive_table_rows,:host,.flex_column_min_width_height{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}:host{overflow-y:scroll;overflow-x:hidden}.responsive_table_rows .responsive_table_header_loading{display:flex;justify-content:center}.responsive_table_rows .responsive_table_row{display:flex;flex-direction:row;width:100%;border-bottom:1px solid #e9e9e9}.responsive_table_rows .responsive_table_row:nth-child(2n){background-color:#dee8f380}.responsive_table_rows .responsive_table_row:nth-child(odd){background-color:#f1f5fa80}.responsive_table_rows .responsive_table_row:hover{background-color:#c1d4e780;cursor:pointer}.responsive_table_rows .responsive_table_row.selected{background-color:#9cbad980}.responsive_table_rows .responsive_table_row .simple_row{flex-direction:row;display:flex;width:100%;height:100%}.responsive_table_rows .responsive_table_row .detail_row{box-shadow:inset 0 0 1px 1px #9cbad980;flex-direction:row;display:flex;width:100%}.responsive_table_rows .responsive_table_row .responsive_table_row_cell{display:flex;width:100%;min-width:100px;padding:2px;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center;font-size:14px}.responsive_table_rows .responsive_table_row .responsive_table_row_cell.hide{visibility:hidden}.responsive_table_rows .responsive_table_row .responsive_table_row_cell:last-child{border-right:none}.responsive_table_rows .example-list .example-box{cursor:move}.responsive_table_rows .cdk-drag-preview{background-color:red;box-sizing:border-box;height:50px;display:flex;width:100%;flex-direction:row;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.responsive_table_rows .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder):nth-child(2n){background-color:#e2b38e}.responsive_table_rows .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder):nth-child(odd){background-color:#e8c0a2}::ng-deep .cdk-drag{background-color:#5287bd}::ng-deep .cdk-drag.responsive_table_row.cdk-drag-preview{background-color:#bc8ce8;display:flex;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center}::ng-deep .cdk-drag.responsive_table_row.cdk-drag-preview .simple_row{flex-direction:row;display:flex;width:100%;height:100%}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell{display:flex;width:100%;min-width:100px;padding:2px;border-right:1px solid #e9e9e9;overflow:hidden;align-items:center}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell.hide{visibility:hidden}::ng-deep .cdk-drag.responsive_table_row .responsive_table_row_cell:last-child{border-right:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: RowsService }]; }, propDecorators: { data: [{
                type: Input
            }], columns: [{
                type: Input
            }], config: [{
                type: Input
            }], droggableRows: [{
                type: Input
            }], rowDetail: [{
                type: Input
            }], onClickRow: [{
                type: Output
            }], onChangePositionRows: [{
                type: Output
            }] } });

class TableBodyComponent {
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
        // console.log('received: ', this.internalRows);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableBodyComponent, selector: "app-table-body", inputs: { config: "config", columns: "columns", rows: "rows", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", rowCount: "rowCount", pageSize: "pageSize", rowDetail: "rowDetail", rowClass: "rowClass", selected: "selected", droggableRows: "droggableRows" }, outputs: { page: "page", select: "select", onChangePositionRows: "onChangePositionRows", scroll: "scroll" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table_header_loading\" *ngIf=\"loadingIndicator && !rows\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"responsive_table_body\">\r\n  <app-reactive-table-row-cell [data]         =\"internalRows\"\r\n                               [columns]      =\"columns\"\r\n                               [config]       =\"config\"\r\n                               [rowDetail]    =\"rowDetail\"\r\n                               [droggableRows]=\"droggableRows\"\r\n                               (onChangePositionRows)=\"onChangePositionRows.emit($event)\"\r\n                               (onClickRow)   =\"select.emit($event)\">\r\n  </app-reactive-table-row-cell>\r\n</div>\r\n", styles: [".flex_column,.flex_column_min_width_height,:host .responsive_table_body,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host .responsive_table_body,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3$1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: ReactiveTableRowCellComponent, selector: "app-reactive-table-row-cell", inputs: ["data", "columns", "config", "droggableRows", "rowDetail"], outputs: ["onClickRow", "onChangePositionRows"] }] }); }
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

class TableFooterComponent {
    constructor() {
        this.rowCount = '';
        this.footerHeight = 50;
        this.totalMessage = 'No Data';
        this.page = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableFooterComponent, selector: "app-table-footer", inputs: { rowCount: "rowCount", pageSize: "pageSize", footerHeight: "footerHeight", totalMessage: "totalMessage" }, outputs: { page: "page" }, ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-footer', template: "" }]
        }], propDecorators: { rowCount: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], footerHeight: [{
                type: Input
            }], totalMessage: [{
                type: Input
            }], page: [{
                type: Output
            }] } });

class TableResponsiveComponent {
    constructor() {
        this.selectionType = SelectionType.simple;
        this._internalColumns = [];
        this.HEIGHT_ROW = 50;
        this.filterHeader = [];
        this.sortHeader = [];
        this.pageSize = Infinity;
        this.selected = [];
        this.activate = new EventEmitter();
        this.refreshProp = new EventEmitter();
        this.addItemProp = new EventEmitter();
        this.onChangePositionRows = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['rows']?.currentValue) {
            this.tabledata = [...changes['rows'].currentValue];
            this.tabledataFiltered = [...changes['rows'].currentValue];
            // console.log('Table receive data.length:'  +this.tabledataFiltered.length);
        }
        if (changes['selected']?.currentValue) {
            this.selected = changes['selected']?.currentValue;
        }
        if (changes['externalFilters']) {
            // console.log('Framework', changes['externalFilters']);
        }
        // console.log('Framework', changes['externalFilters']);
        this.updateFilterInput();
    }
    ngOnInit() {
        this.HEIGHT_HEADER = this.config?.headerHeight ? this.config.headerHeight : this.HEIGHT_HEADER;
        this.HEIGHT_FOOTER = this.config?.footerHeight ? this.config.footerHeight : this.HEIGHT_FOOTER;
        this.HEIGHT_FOOTER = this.config?.rowHeight ? this.config.rowHeight : this.HEIGHT_ROW;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this._internalColumns = val.toArray();
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    updateFilterInput(keyFilter) {
        this.tabledata = this.rows;
        if (keyFilter) {
            const foundIndex = this.filterHeader.findIndex((f) => f.key === keyFilter.key);
            if (foundIndex >= 0) {
                // updateFilter from header
                this.filterHeader[foundIndex].value = keyFilter.value;
            }
            else {
                this.filterHeader.push({ key: keyFilter.key, value: keyFilter.value });
            }
        }
        this.tabledata = this.rows;
        if (this.tabledata) {
            this.filterHeader.forEach((keyValFilter) => {
                this.tabledata = this.tabledata.filter((o) => (o[keyValFilter.key] + '').toLowerCase().indexOf((keyValFilter.value + '').toLowerCase()) >= 0);
            });
        }
        this.tabledataFiltered = this.tabledata;
    }
    sortColumnFilterInput(sort) {
        // performance -> do not call again updateFilterInput reason on original daten;
        this.tabledata = [...this.tabledataFiltered];
        const foundIndex = this.sortHeader.findIndex((f) => f.key === sort.key);
        if (foundIndex >= 0) {
            // updateFilter from header
            this.sortHeader[foundIndex].direction = sort.direction;
        }
        else {
            this.sortHeader.push({ key: sort.key, direction: sort.direction, type: sort.type });
        }
        this.sortHeader = this.sortHeader.filter((f) => f.direction !== IStates.Nothing);
        // last changed -> last filter has bigger priority
        // let sortByAllKeys = (a: {[key: string]: any}, b: {[key: string]: any}): number => {
        //   const arr: Array<number> = [];
        //   this.sortHeader.forEach((r) => {
        //     const d = r.direction === IStates.BiggerToSmaller ? -1 : 1;
        //     let res = (a[r.key] + '')['localeCompare'](b[r.key] + '', 'de', { numeric: r.type === 'number', sensitivity: "case" });
        //     arr.push(d * res);
        //   });
        //   return  arr.some((s) => s === -1) ? -1 : 1;  // arr[0]; //
        // };
        // last changed -> last filter has smaller priority
        const sortByAllKeys = (a, b) => {
            for (let i = 0; i < this.sortHeader.length; i++) {
                const ky = this.sortHeader[i].key;
                const ty = this.sortHeader[i].type;
                const d = this.sortHeader[i].direction === IStates.BiggerToSmaller ? -1 : 1;
                const res = (a[ky] + '')['localeCompare'](b[ky] + '', 'de', { numeric: ty === 'number', sensitivity: "case" });
                if (res === -1 || res === 1) {
                    return res * d;
                }
            }
            // the same return 0;
            return 0;
        };
        if (this.sortHeader.length > 0) {
            this.tabledata.sort((a, b) => {
                return sortByAllKeys(a, b);
            });
        }
    }
    positionRowsChanged(data) {
        this.tabledata = [...data];
        this.tabledataFiltered = [...data];
        this.onChangePositionRows.emit(data);
    }
    onHeaderSelect(event) { }
    onBodyPage(event) { }
    onSelectRow(rowKeyValuesIndex) {
        this.activate?.emit(rowKeyValuesIndex);
    }
    onBodyScroll(event) { }
    onFooterPage(event) { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableResponsiveComponent, selector: "lib-table-responsive", inputs: { rows: "rows", config: "config", selected: "selected", droggableColumns: "droggableColumns", droggableRows: "droggableRows", externalFilters: "externalFilters" }, outputs: { activate: "activate", refreshProp: "refreshProp", addItemProp: "addItemProp", onChangePositionRows: "onChangePositionRows" }, queries: [{ propertyName: "rowDetail", first: true, predicate: DatatableRowDetailDirective, descendants: true }, { propertyName: "columnTemplates", predicate: DataTableColumnDirective }], usesOnChanges: true, ngImport: i0, template: "<div class=\"responsive_table\">\n\n  <app-table-header\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"HEIGHT_HEADER\"\n    [allRowsSelected]=\"selected\"\n    [selectionType]=\"selectionType\"\n    [droggableColumns]=\"droggableColumns\"\n    (select)=\"onHeaderSelect($event)\"\n    (onInputTextKey)=\"updateFilterInput($event)\"\n    (onInputSortKey)=\"sortColumnFilterInput($event)\"\n  ></app-table-header>\n  <app-table-body\n    [config]=\"config\"\n    [rows]=\"tabledata\"\n    [scrollbarV]=\"config.scrollV\"\n    [scrollbarH]=\"config.scrollH\"\n    [loadingIndicator]=\"config.showLoading\"\n    [rowCount]=\"tabledataFiltered?.length + ''\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [rowDetail]=\"rowDetail\"\n    [rowClass]=\"rowClass\"\n    [selected]=\"selected\"\n    [droggableRows]=\"droggableRows\"\n    (onChangePositionRows)=\"positionRowsChanged($event)\"\n    (page)=\"onBodyPage($event)\"\n    (select)=\"onSelectRow($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n  ></app-table-body>\n  <app-table-footer\n    [rowCount]=\"tabledataFiltered?.length + ''\"\n    [pageSize]=\"pageSize\"\n    [footerHeight]=\"HEIGHT_FOOTER\"\n    [totalMessage]=\"config.messageTableNoData\"\n    (page)=\"onFooterPage($event)\"\n  ></app-table-footer>\n\n<!--  <div *ngIf=\"config.displayTableName\"> &#45;&#45;NAme&#45;&#45; </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n<!--  <div class=\"responsive_table_header\" style=\"height: {{HEIGHT_HEADER}}\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-reactive-table-inputs-filter [attr]=\"struct\"-->\n<!--                                      (onInputTextKey)=\"updateFilterInput($event)\"-->\n<!--                                      (onInputSortKey)=\"sortColumnFilterInput($event)\"-->\n<!--                                      (addItem)=\"addItemProp.emit()\"-->\n<!--                                      (refresh)=\"refreshProp.emit()\"-->\n<!--    >-->\n<!--    </app-reactive-table-inputs-filter>-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--  </div>-->\n\n<!--  <div class=\"responsive_table_header_loading\" *ngIf=\"config?.showLoading && !rows\">-->\n<!--    <mat-divider></mat-divider>-->\n<!--    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>-->\n<!--  </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n\n<!--  <div class=\"responsive_table_body\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-reactive-table-row-cell [data]=\"tabledata\"-->\n<!--                                 [attr]=\"struct\"-->\n<!--                                 (onClickRow)=\"config.onSelectRow($event)\"-->\n<!--                                 [config]=\"config\"-->\n<!--    >-->\n<!--    </app-reactive-table-row-cell>-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--  </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n<!--  <div *ngIf=\"!config?.displayFooter === false\" class=\"responsive_table_footer\" style=\"height: {{HEIGHT_FOOTER}}\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-app-reactive-table-footer></app-app-reactive-table-footer>-->\n<!--    <mat-divider vertical=\"true\" style=\"height: 100%\"></mat-divider>-->\n<!--  </div>-->\n<!--  <mat-divider></mat-divider>-->\n</div>\n", styles: [".flex_column,.flex_column_min_width_height,.responsive_table,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,.responsive_table,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}.responsive_table{border:1px solid #5287bd}.responsive_table .responsive_table_header{display:flex;background-color:#5287bd;color:#fff}.responsive_table .responsive_table_body{min-width:0;min-height:0;display:flex;flex:1}.responsive_table .responsive_table_footer{display:flex}\n"], dependencies: [{ kind: "component", type: TableHeaderComponent, selector: "app-table-header", inputs: ["columns", "headerHeight", "allRowsSelected", "selectionType", "droggableColumns"], outputs: ["select", "onInputTextKey", "onInputSortKey", "addItem", "refresh"] }, { kind: "component", type: TableBodyComponent, selector: "app-table-body", inputs: ["config", "columns", "rows", "scrollbarV", "scrollbarH", "loadingIndicator", "rowCount", "pageSize", "rowDetail", "rowClass", "selected", "droggableRows"], outputs: ["page", "select", "onChangePositionRows", "scroll"] }, { kind: "component", type: TableFooterComponent, selector: "app-table-footer", inputs: ["rowCount", "pageSize", "footerHeight", "totalMessage"], outputs: ["page"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-table-responsive', template: "<div class=\"responsive_table\">\n\n  <app-table-header\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"HEIGHT_HEADER\"\n    [allRowsSelected]=\"selected\"\n    [selectionType]=\"selectionType\"\n    [droggableColumns]=\"droggableColumns\"\n    (select)=\"onHeaderSelect($event)\"\n    (onInputTextKey)=\"updateFilterInput($event)\"\n    (onInputSortKey)=\"sortColumnFilterInput($event)\"\n  ></app-table-header>\n  <app-table-body\n    [config]=\"config\"\n    [rows]=\"tabledata\"\n    [scrollbarV]=\"config.scrollV\"\n    [scrollbarH]=\"config.scrollH\"\n    [loadingIndicator]=\"config.showLoading\"\n    [rowCount]=\"tabledataFiltered?.length + ''\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [rowDetail]=\"rowDetail\"\n    [rowClass]=\"rowClass\"\n    [selected]=\"selected\"\n    [droggableRows]=\"droggableRows\"\n    (onChangePositionRows)=\"positionRowsChanged($event)\"\n    (page)=\"onBodyPage($event)\"\n    (select)=\"onSelectRow($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n  ></app-table-body>\n  <app-table-footer\n    [rowCount]=\"tabledataFiltered?.length + ''\"\n    [pageSize]=\"pageSize\"\n    [footerHeight]=\"HEIGHT_FOOTER\"\n    [totalMessage]=\"config.messageTableNoData\"\n    (page)=\"onFooterPage($event)\"\n  ></app-table-footer>\n\n<!--  <div *ngIf=\"config.displayTableName\"> &#45;&#45;NAme&#45;&#45; </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n<!--  <div class=\"responsive_table_header\" style=\"height: {{HEIGHT_HEADER}}\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-reactive-table-inputs-filter [attr]=\"struct\"-->\n<!--                                      (onInputTextKey)=\"updateFilterInput($event)\"-->\n<!--                                      (onInputSortKey)=\"sortColumnFilterInput($event)\"-->\n<!--                                      (addItem)=\"addItemProp.emit()\"-->\n<!--                                      (refresh)=\"refreshProp.emit()\"-->\n<!--    >-->\n<!--    </app-reactive-table-inputs-filter>-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--  </div>-->\n\n<!--  <div class=\"responsive_table_header_loading\" *ngIf=\"config?.showLoading && !rows\">-->\n<!--    <mat-divider></mat-divider>-->\n<!--    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>-->\n<!--  </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n\n<!--  <div class=\"responsive_table_body\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-reactive-table-row-cell [data]=\"tabledata\"-->\n<!--                                 [attr]=\"struct\"-->\n<!--                                 (onClickRow)=\"config.onSelectRow($event)\"-->\n<!--                                 [config]=\"config\"-->\n<!--    >-->\n<!--    </app-reactive-table-row-cell>-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--  </div>-->\n\n<!--  <mat-divider></mat-divider>-->\n<!--  <div *ngIf=\"!config?.displayFooter === false\" class=\"responsive_table_footer\" style=\"height: {{HEIGHT_FOOTER}}\">-->\n<!--    <mat-divider vertical=\"true\"></mat-divider>-->\n<!--    <app-app-reactive-table-footer></app-app-reactive-table-footer>-->\n<!--    <mat-divider vertical=\"true\" style=\"height: 100%\"></mat-divider>-->\n<!--  </div>-->\n<!--  <mat-divider></mat-divider>-->\n</div>\n", styles: [".flex_column,.flex_column_min_width_height,.responsive_table,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,.responsive_table,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}.responsive_table{border:1px solid #5287bd}.responsive_table .responsive_table_header{display:flex;background-color:#5287bd;color:#fff}.responsive_table .responsive_table_body{min-width:0;min-height:0;display:flex;flex:1}.responsive_table .responsive_table_footer{display:flex}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { rows: [{
                type: Input
            }], config: [{
                type: Input
            }], selected: [{
                type: Input
            }], droggableColumns: [{
                type: Input
            }], droggableRows: [{
                type: Input
            }], externalFilters: [{
                type: Input
            }], activate: [{
                type: Output
            }], refreshProp: [{
                type: Output
            }], addItemProp: [{
                type: Output
            }], onChangePositionRows: [{
                type: Output
            }], columnTemplates: [{
                type: ContentChildren,
                args: [DataTableColumnDirective]
            }], rowDetail: [{
                type: ContentChild,
                args: [DatatableRowDetailDirective]
            }] } });

class TableResponsiveService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableResponsiveService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AppReactiveTableFooterComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppReactiveTableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AppReactiveTableFooterComponent, selector: "app-app-reactive-table-footer", ngImport: i0, template: "<p>app-reactive-table-footer works!</p>\n", styles: [".flex_column,.flex_column_min_width_height,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppReactiveTableFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-app-reactive-table-footer', template: "<p>app-reactive-table-footer works!</p>\n", styles: [".flex_column,.flex_column_min_width_height,:host{display:flex;flex:1;flex-direction:column}.flex_row{display:flex;flex:1;flex-direction:row}.max_height_width{height:100%;width:100%;min-width:0;min-height:0}.flex_column_min_width_height,:host{min-width:0;min-height:0}*{scrollbar-width:thin;scrollbar-color:#5287bd #DFE9EB}*::-webkit-scrollbar{height:10px;width:10px}*::-webkit-scrollbar-track{border-radius:3px;background-color:#d3d8da}*::-webkit-scrollbar-track:hover{background-color:#b8c0c2}*::-webkit-scrollbar-track:active{background-color:#b8c0c2}*::-webkit-scrollbar-thumb{border-radius:3px;background-color:#5287bd}*::-webkit-scrollbar-thumb:hover{background-color:#77a1cb}*::-webkit-scrollbar-thumb:active{background-color:#3d6e9f}\n"] }]
        }] });

class KeysValuesPipe {
    constructor() { }
    transform(dataObj) {
        const toArr = [];
        Object.keys(dataObj).forEach((k) => toArr.push({ key: k, value: dataObj[k] }));
        return toArr;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, name: "KeysValuesPipe" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'KeysValuesPipe',
                }]
        }], ctorParameters: function () { return []; } });

class TableResponsiveModule {
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

/*
 * Public API Surface of table-responsive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableColumnCellDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, IStates, ITypes, SelectionType, TableResponsiveComponent, TableResponsiveModule, TableResponsiveService };
//# sourceMappingURL=table-responsive.mjs.map
