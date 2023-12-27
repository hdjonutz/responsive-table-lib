import { EventEmitter, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { IResponsiveTableConfig, IStates, SelectionType } from "./table-responsive-interface";
import { DataTableColumnDirective } from "../directive/column/column.directive";
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
    }>;
    pageSize: number;
    rowDetail: {
        keyIndex: string;
        show: boolean;
        row: any;
    };
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
    /**
     * Returns the column templates.
     */
    get columnTemplates(): QueryList<DataTableColumnDirective>;
    updateFilterInput(keyFilter: {
        value: string;
        key: string;
    }): void;
    sortColumnFilterInput(sort: {
        direction: IStates;
        key: string;
    }): void;
    positionRowsChanged(data: Array<{
        [key: string]: any;
    }>): void;
    onHeaderSelect(event: any): void;
    onBodyPage(event: any): void;
    onBodySelect(event: any): void;
    onBodyScroll(event: any): void;
    onFooterPage(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableResponsiveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableResponsiveComponent, "lib-table-responsive", never, { "rows": { "alias": "rows"; "required": false; }; "config": { "alias": "config"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "droggableColumns": { "alias": "droggableColumns"; "required": false; }; "droggableRows": { "alias": "droggableRows"; "required": false; }; }, { "refreshProp": "refreshProp"; "addItemProp": "addItemProp"; "onChangePositionRows": "onChangePositionRows"; }, ["columnTemplates"], never, false, never>;
}
