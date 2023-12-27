import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IResponsiveTableConfig } from "../table-responsive-interface";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class ReactiveTableRowCellComponent implements OnInit, OnChanges {
    rowClickIndex: number;
    data: Array<{
        [key: string]: string | number;
    }>;
    columns: Array<any>;
    config: IResponsiveTableConfig;
    droggableRows: boolean;
    onClickRow: EventEmitter<{
        row: any;
        item: any;
    }>;
    onChangePositionRows: EventEmitter<{
        [key: string]: string | number;
    }[]>;
    _tableBody: ElementRef;
    dataToDisplay: Array<{
        [key: string]: any;
    }>;
    cellContext: any;
    constructor(tableBody: ElementRef);
    ngOnInit(): void;
    updateOnClickRow(row: {
        [key: string]: any;
    }, cell: {
        [key: string]: any;
    }, index: number): void;
    ngOnChanges(changes: SimpleChanges): void;
    drop(event: CdkDragDrop<string[]>): void;
    printV(a: any, b?: any, value?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReactiveTableRowCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReactiveTableRowCellComponent, "app-reactive-table-row-cell", never, { "data": { "alias": "data"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "config": { "alias": "config"; "required": false; }; "droggableRows": { "alias": "droggableRows"; "required": false; }; }, { "onClickRow": "onClickRow"; "onChangePositionRows": "onChangePositionRows"; }, never, never, false, never>;
}
