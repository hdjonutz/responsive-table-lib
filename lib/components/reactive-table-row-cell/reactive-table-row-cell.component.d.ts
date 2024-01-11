import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IResponsiveTableConfig } from "../table-responsive-interface";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DatatableRowDetailDirective } from "../../directive/row-detail/row-detail.directive";
import { RowsService } from "../../services/rows.service";
import { Subscription } from "rxjs";
import * as i0 from "@angular/core";
export declare class ReactiveTableRowCellComponent implements OnInit, OnChanges, OnDestroy {
    private rowService;
    rowClickIndex: number;
    rowsExpanded: Array<{
        [key: string]: any;
    }>;
    rowsObs: Subscription;
    data: Array<{
        [key: string]: string | number;
    }>;
    columns: Array<any>;
    config: IResponsiveTableConfig;
    droggableRows: boolean;
    rowDetail: DatatableRowDetailDirective;
    onClickRow: EventEmitter<{
        row: any;
        item: any;
        index: number;
        key: string;
    }>;
    onChangePositionRows: EventEmitter<{
        [key: string]: string | number;
    }[]>;
    _tableBody: ElementRef;
    dataToDisplay: Array<{
        [key: string]: any;
    }>;
    constructor(tableBody: ElementRef, rowService: RowsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateOnClickRow(row: {
        [key: string]: any;
    }, cell: {
        [key: string]: any;
    }, index: number, key: string): void;
    ngOnChanges(changes: SimpleChanges): void;
    drop(event: CdkDragDrop<string[]>): void;
    getRowHeight(row: {
        [key: string]: any;
    }): any;
    getCellWidth(att: {
        [key: string]: any;
    }): any;
    getIsExpanded(row: {
        [key: string]: any;
    }): boolean;
    stopOnMoved(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReactiveTableRowCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReactiveTableRowCellComponent, "app-reactive-table-row-cell", never, { "data": { "alias": "data"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "config": { "alias": "config"; "required": false; }; "droggableRows": { "alias": "droggableRows"; "required": false; }; "rowDetail": { "alias": "rowDetail"; "required": false; }; }, { "onClickRow": "onClickRow"; "onChangePositionRows": "onChangePositionRows"; }, never, never, false, never>;
}
