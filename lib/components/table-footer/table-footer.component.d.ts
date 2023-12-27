import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableFooterComponent {
    rowCount: string;
    pageSize: number;
    footerHeight: number;
    totalMessage: string;
    page: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterComponent, "app-table-footer", never, { "rowCount": { "alias": "rowCount"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "footerHeight": { "alias": "footerHeight"; "required": false; }; "totalMessage": { "alias": "totalMessage"; "required": false; }; }, { "page": "page"; }, never, never, false, never>;
}
