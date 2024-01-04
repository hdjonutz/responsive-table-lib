import { EventEmitter, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { IResponsiveTableConfig, IStates, ITypes, SelectionType } from "./table-responsive-interface";
import { DataTableColumnDirective } from "../directive/column/column.directive";
import { DatatableRowDetailDirective } from "../directive/row-detail/row-detail.directive";
import * as i0 from "@angular/core";
export declare class TableResponsiveComponent implements OnInit, OnChanges {
    protected selectionType: SelectionType;
    _internalColumns: Array<any>;
    HEIGHT_HEADER: number;
    HEIGHT_FOOTER: number;
    HEIGHT_ROW: number;
    tabledata: Array<{
        [key: string]: any;
    }>;
    tabledataFiltered: Array<{
        [key: string]: any;
    }>;
    filterHeader: Array<{
        key: string;
        value: string;
    }>;
    sortHeader: Array<{
        key: string;
        direction: IStates;
        type: ITypes;
    }>;
    pageSize: number;
    rowClass: {
        keyIndex: string;
        className: boolean;
        row: any;
    };
    rows: Array<{
        [key: string]: any;
    }>;
    config: IResponsiveTableConfig;
    selected: Array<any>;
    droggableColumns: boolean;
    droggableRows: boolean;
    activate: EventEmitter<any>;
    refreshProp: EventEmitter<any>;
    addItemProp: EventEmitter<any>;
    onChangePositionRows: EventEmitter<Array<{
        [key: string]: any;
    }>>;
    _columnTemplates: QueryList<DataTableColumnDirective>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val: QueryList<DataTableColumnDirective>);
    rowDetail: DatatableRowDetailDirective;
    /**
     * Returns the column templates.
     */
    get columnTemplates(): QueryList<DataTableColumnDirective>;
    updateFilterInput(keyFilter: {
        value: string;
        key: string;
        type: string;
    }): void;
    sortColumnFilterInput(sort: {
        direction: IStates;
        key: string;
        type: ITypes;
    }): void;
    positionRowsChanged(data: Array<{
        [key: string]: any;
    }>): void;
    onHeaderSelect(event: any): void;
    onBodyPage(event: any): void;
    onSelectRow(rowKeyValuesIndex: {
        [key: string]: any;
    }): void;
    onBodyScroll(event: any): void;
    onFooterPage(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableResponsiveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableResponsiveComponent, "lib-table-responsive", never, { "rows": { "alias": "rows"; "required": false; }; "config": { "alias": "config"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "droggableColumns": { "alias": "droggableColumns"; "required": false; }; "droggableRows": { "alias": "droggableRows"; "required": false; }; }, { "activate": "activate"; "refreshProp": "refreshProp"; "addItemProp": "addItemProp"; "onChangePositionRows": "onChangePositionRows"; }, ["rowDetail", "columnTemplates"], never, false, never>;
}
