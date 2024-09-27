import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { IResponsiveTableConfig, IStates, ITypes } from "../table-responsive-interface";
import * as i0 from "@angular/core";
export declare class TableHeaderComponent implements OnInit, AfterViewInit {
    protected readonly IStates: typeof IStates;
    selectToAction: {
        [key: string]: IStates;
    };
    stateFilterText: {
        [key: string]: string;
    };
    columns: Array<any>;
    headerHeight: number;
    allRowsSelected: Array<any>;
    selectionType: 'simple' | 'multi';
    droggableColumns: boolean;
    config: IResponsiveTableConfig;
    select: EventEmitter<any>;
    onInputTextKey: EventEmitter<any>;
    onInputSortKey: EventEmitter<any>;
    addItem: EventEmitter<any>;
    refresh: EventEmitter<any>;
    headerRef?: ElementRef;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    changeTo(nameAction: IStates, key: string, type: ITypes): void;
    updateFilterText(event: KeyboardEvent, key: string, format: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHeaderComponent, "app-table-header", never, { "columns": { "alias": "columns"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "allRowsSelected": { "alias": "allRowsSelected"; "required": false; }; "selectionType": { "alias": "selectionType"; "required": false; }; "droggableColumns": { "alias": "droggableColumns"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, { "select": "select"; "onInputTextKey": "onInputTextKey"; "onInputSortKey": "onInputSortKey"; "addItem": "addItem"; "refresh": "refresh"; }, never, never, false, never>;
}
