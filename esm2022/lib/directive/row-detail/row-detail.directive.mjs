import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "../../services/rows.service";
export class DatatableRowDetailDirective {
    constructor(rowService) {
        this.rowService = rowService;
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    // this will be from outside called onClick button
    toggleExpandRow(row) {
        this.toggle?.emit({ value: row });
        this.rowService.setRows(row);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailDirective, deps: [{ token: i1.RowsService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DatatableRowDetailDirective, selector: "lib-table-responsive-row-detail", inputs: { _templateInput: ["template", "_templateInput"], rowDetailHeight: "rowDetailHeight" }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: DatatableRowDetailTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatatableRowDetailDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'lib-table-responsive-row-detail' }]
        }], ctorParameters: function () { return [{ type: i1.RowsService }]; }, propDecorators: { toggle: [{
                type: Output
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true }]
            }], rowDetailHeight: [{
                type: Input,
                args: ['rowDetailHeight']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS1yZXNwb25zaXZlL3NyYy9saWIvZGlyZWN0aXZlL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFJdEYsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUFvQixVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBRWpDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUZaLENBQUM7SUFTOUMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDcEQsQ0FBQztJQUtELGtEQUFrRDtJQUNsRCxlQUFlLENBQUMsR0FBUTtRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7K0dBckJVLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtQQU94QixtQ0FBbUMsMkJBQVUsV0FBVzs7NEZBUDNELDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRTtrR0FJOUMsTUFBTTtzQkFBZixNQUFNO2dCQUVQLGNBQWM7c0JBRGIsS0FBSzt1QkFBQyxVQUFVO2dCQUlqQixjQUFjO3NCQURiLFlBQVk7dUJBQUMsbUNBQW1DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBUXRGLGVBQWU7c0JBRGQsS0FBSzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1Jvd3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcm93cy5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdsaWItdGFibGUtcmVzcG9uc2l2ZS1yb3ctZGV0YWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvd1NlcnZpY2U6IFJvd3NTZXJ2aWNlKXt9XHJcblxyXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgndGVtcGxhdGUnKVxyXG4gIF90ZW1wbGF0ZUlucHV0ITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXHJcbiAgX3RlbXBsYXRlUXVlcnkhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdyb3dEZXRhaWxIZWlnaHQnKVxyXG4gIHJvd0RldGFpbEhlaWdodCE6IG51bWJlcjtcclxuXHJcbiAgLy8gdGhpcyB3aWxsIGJlIGZyb20gb3V0c2lkZSBjYWxsZWQgb25DbGljayBidXR0b25cclxuICB0b2dnbGVFeHBhbmRSb3cocm93OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlPy5lbWl0KHt2YWx1ZTogcm93fSk7XHJcbiAgICB0aGlzLnJvd1NlcnZpY2Uuc2V0Um93cyhyb3cpO1xyXG4gIH1cclxufVxyXG4iXX0=