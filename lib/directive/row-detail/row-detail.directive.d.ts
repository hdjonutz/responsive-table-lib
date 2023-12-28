import { EventEmitter, TemplateRef } from '@angular/core';
import { RowsService } from "../../services/rows.service";
import * as i0 from "@angular/core";
export declare class DatatableRowDetailDirective {
    private rowService;
    constructor(rowService: RowsService);
    toggle: EventEmitter<any>;
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    get template(): TemplateRef<any>;
    rowDetailHeight: number;
    toggleExpandRow(row: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatatableRowDetailDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DatatableRowDetailDirective, "lib-table-responsive-row-detail", never, { "_templateInput": { "alias": "template"; "required": false; }; "rowDetailHeight": { "alias": "rowDetailHeight"; "required": false; }; }, { "toggle": "toggle"; }, ["_templateQuery"], never, false, never>;
}
