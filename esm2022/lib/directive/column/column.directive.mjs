import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnCellDirective } from "./column-cell.directive";
import { DataTableColumnHeaderDirective } from "./column-header.directive";
import * as i0 from "@angular/core";
export class DataTableColumnDirective {
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DataTableColumnDirective, selector: "lib-table-responsive-column", inputs: { name: "name", key: "key", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", style: "style", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: DataTableColumnCellDirective, descendants: true, read: TemplateRef }, { propertyName: "_headerTemplateQuery", first: true, predicate: DataTableColumnHeaderDirective, descendants: true, read: TemplateRef }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'lib-table-responsive-column' }]
        }], propDecorators: { name: [{
                type: Input
            }], key: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], style: [{
                type: Input
            }], _cellTemplateInput: [{
                type: Input,
                args: ['cellTemplate']
            }], _cellTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnCellDirective, { read: TemplateRef, static: false }]
            }], _headerTemplateInput: [{
                type: Input,
                args: ['headerTemplate']
            }], _headerTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlLXJlc3BvbnNpdmUvc3JjL2xpYi9kaXJlY3RpdmUvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBR3pFLE1BQU0sT0FBTyx3QkFBd0I7SUFjbkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzVELENBQUM7SUFRRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLENBQUM7K0dBMUJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLG1XQVdyQiw0QkFBNEIsMkJBQVUsV0FBVyxvRUFVakQsOEJBQThCLDJCQUFVLFdBQVc7OzRGQXJCdEQsd0JBQXdCO2tCQURwQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFOzhCQUUzQyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUdOLGtCQUFrQjtzQkFEakIsS0FBSzt1QkFBQyxjQUFjO2dCQUlyQixrQkFBa0I7c0JBRGpCLFlBQVk7dUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBUWhGLG9CQUFvQjtzQkFEbkIsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBSXZCLG9CQUFvQjtzQkFEbkIsWUFBWTt1QkFBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlfSBmcm9tIFwiLi9jb2x1bW4tY2VsbC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmV9IGZyb20gXCIuL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdsaWItdGFibGUtcmVzcG9uc2l2ZS1jb2x1bW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkga2V5ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpZHRoITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0eWxlIToge21pbldpZHRoOiBudW1iZXIsIG1heFdpZHRoOiBudW1iZXI7IHdpZHRoOiBudW1iZXJ9O1xyXG5cclxuICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXHJcbiAgX2NlbGxUZW1wbGF0ZUlucHV0ITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgX2NlbGxUZW1wbGF0ZVF1ZXJ5ITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IGNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jZWxsVGVtcGxhdGVJbnB1dCB8fCB0aGlzLl9jZWxsVGVtcGxhdGVRdWVyeTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnaGVhZGVyVGVtcGxhdGUnKVxyXG4gIF9oZWFkZXJUZW1wbGF0ZUlucHV0ITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSlcclxuICBfaGVhZGVyVGVtcGxhdGVRdWVyeSE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2hlYWRlclRlbXBsYXRlUXVlcnk7XHJcbiAgfVxyXG59XHJcbiJdfQ==