import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IResponsiveTableConfig } from "../table-responsive-interface";
import { DatatableRowDetailDirective } from "../../directive/row-detail/row-detail.directive";
import * as i0 from "@angular/core";
export declare class TableBodyComponent implements OnInit, OnChanges {
    config: IResponsiveTableConfig;
    columns: Array<any>;
    rows: Array<any>;
    scrollbarV: boolean;
    scrollbarH: boolean;
    loadingIndicator: boolean;
    rowCount: string;
    pageSize: number;
    rowDetail: DatatableRowDetailDirective;
    rowClass: {
        keyIndex: string;
        className: boolean;
        row: any;
    };
    selected: Array<any>;
    droggableRows: boolean;
    page: EventEmitter<any>;
    select: EventEmitter<any>;
    onChangePositionRows: EventEmitter<Array<{
        [key: string]: string | number;
    }>>;
    scroll: EventEmitter<any>;
    internalRows: Array<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBodyComponent, "app-table-body", never, { "config": { "alias": "config"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "scrollbarV": { "alias": "scrollbarV"; "required": false; }; "scrollbarH": { "alias": "scrollbarH"; "required": false; }; "loadingIndicator": { "alias": "loadingIndicator"; "required": false; }; "rowCount": { "alias": "rowCount"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "rowDetail": { "alias": "rowDetail"; "required": false; }; "rowClass": { "alias": "rowClass"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "droggableRows": { "alias": "droggableRows"; "required": false; }; }, { "page": "page"; "select": "select"; "onChangePositionRows": "onChangePositionRows"; "scroll": "scroll"; }, never, never, false, never>;
}
