import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class TableFooterComponent {
    constructor() {
        this.rowCount = '';
        this.footerHeight = 50;
        this.totalMessage = 'No Data';
        this.page = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableFooterComponent, selector: "app-table-footer", inputs: { rowCount: "rowCount", pageSize: "pageSize", footerHeight: "footerHeight", totalMessage: "totalMessage" }, outputs: { page: "page" }, ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table-footer', template: "" }]
        }], propDecorators: { rowCount: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], footerHeight: [{
                type: Input
            }], totalMessage: [{
                type: Input
            }], page: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlLXJlc3BvbnNpdmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLWZvb3Rlci90YWJsZS1mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtZm9vdGVyL3RhYmxlLWZvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU9yRSxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTVcsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFFM0IsaUJBQVksR0FBWSxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBWSxTQUFTLENBQUM7UUFFakMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBRXhEOytHQVJZLG9CQUFvQjttR0FBcEIsb0JBQW9CLHVNQ1BqQyxFQUFBOzs0RkRPYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usa0JBQWtCOzhCQUtuQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLElBQUk7c0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGFibGUtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1mb290ZXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlRm9vdGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSByb3dDb3VudDogICAgICBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwYWdlU2l6ZSE6ICAgICBudW1iZXI7XHJcbiAgQElucHV0KCkgZm9vdGVySGVpZ2h0OiAgbnVtYmVyID0gNTA7XHJcbiAgQElucHV0KCkgdG90YWxNZXNzYWdlOiAgc3RyaW5nID0gJ05vIERhdGEnO1xyXG5cclxuICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG59XHJcbiIsIiJdfQ==