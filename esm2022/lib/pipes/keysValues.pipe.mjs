import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class KeysValuesPipe {
    constructor() { }
    transform(dataObj) {
        const toArr = [];
        Object.keys(dataObj).forEach((k) => toArr.push({ key: k, value: dataObj[k] }));
        return toArr;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, name: "KeysValuesPipe" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: KeysValuesPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'KeysValuesPipe',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5c1ZhbHVlcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL3BpcGVzL2tleXNWYWx1ZXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFakIsU0FBUyxDQUFDLE9BQXVDO1FBQy9DLE1BQU0sS0FBSyxHQUFxQyxFQUFFLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOytHQVJVLGNBQWM7NkdBQWQsY0FBYzs7NEZBQWQsY0FBYztrQkFIMUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnS2V5c1ZhbHVlc1BpcGUnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2V5c1ZhbHVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdHJhbnNmb3JtKGRhdGFPYmo6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ8c3RyaW5nfSk6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHtcclxuICAgIGNvbnN0IHRvQXJyOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YU9iaikuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB0b0Fyci5wdXNoKHtrZXk6IGssIHZhbHVlOiBkYXRhT2JqW2tdfSkpO1xyXG4gICAgcmV0dXJuIHRvQXJyO1xyXG4gIH1cclxufVxyXG4iXX0=