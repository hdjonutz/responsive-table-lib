import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DataTableColumnDirective {
    name: string;
    key: string;
    minWidth: number;
    width: number;
    maxWidth: number;
    style: {
        minWidth: number;
        maxWidth: number;
        width: number;
    };
    _cellTemplateInput: TemplateRef<any>;
    _cellTemplateQuery: TemplateRef<any>;
    get cellTemplate(): TemplateRef<any>;
    _headerTemplateInput: TemplateRef<any>;
    _headerTemplateQuery: TemplateRef<any>;
    get headerTemplate(): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DataTableColumnDirective, "lib-table-responsive-column", never, { "name": { "alias": "name"; "required": false; }; "key": { "alias": "key"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "width": { "alias": "width"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "style": { "alias": "style"; "required": false; }; "_cellTemplateInput": { "alias": "cellTemplate"; "required": false; }; "_headerTemplateInput": { "alias": "headerTemplate"; "required": false; }; }, {}, ["_cellTemplateQuery", "_headerTemplateQuery"], never, false, never>;
}
