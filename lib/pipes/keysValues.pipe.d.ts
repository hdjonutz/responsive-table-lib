import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class KeysValuesPipe implements PipeTransform {
    constructor();
    transform(dataObj: {
        [key: string]: number | string;
    }): Array<{
        key: string;
        value: any;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeysValuesPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KeysValuesPipe, "KeysValuesPipe", false>;
}
