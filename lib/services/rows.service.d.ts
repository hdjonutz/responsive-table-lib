import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class RowsService {
    private rowsExpandedObservable;
    rowsExpanded: Array<{
        [key: string]: any;
    }>;
    constructor();
    setRows(row: {
        [key: string]: any;
    }): void;
    isExpanded(row: {
        [key: string]: any;
    }): boolean;
    getChanges(): Observable<Array<{
        [key: string]: any;
    }>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RowsService>;
}
