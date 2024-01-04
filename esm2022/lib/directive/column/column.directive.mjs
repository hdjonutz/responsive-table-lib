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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DataTableColumnDirective, selector: "lib-table-responsive-column", inputs: { name: "name", key: "key", type: "type", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", style: "style", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: DataTableColumnCellDirective, descendants: true, read: TemplateRef }, { propertyName: "_headerTemplateQuery", first: true, predicate: DataTableColumnHeaderDirective, descendants: true, read: TemplateRef }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataTableColumnDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'lib-table-responsive-column' }]
        }], propDecorators: { name: [{
                type: Input
            }], key: [{
                type: Input
            }], type: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlLXJlc3BvbnNpdmUvc3JjL2xpYi9kaXJlY3RpdmUvY29sdW1uL2NvbHVtbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBR3pFLE1BQU0sT0FBTyx3QkFBd0I7SUFlbkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzVELENBQUM7SUFRRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLENBQUM7K0dBM0JVLHdCQUF3QjttR0FBeEIsd0JBQXdCLGlYQVlyQiw0QkFBNEIsMkJBQVUsV0FBVyxvRUFVakQsOEJBQThCLDJCQUFVLFdBQVc7OzRGQXRCdEQsd0JBQXdCO2tCQURwQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFOzhCQUUzQyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFHTixrQkFBa0I7c0JBRGpCLEtBQUs7dUJBQUMsY0FBYztnQkFJckIsa0JBQWtCO3NCQURqQixZQUFZO3VCQUFDLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQVFoRixvQkFBb0I7c0JBRG5CLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUl2QixvQkFBb0I7c0JBRG5CLFlBQVk7dUJBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZX0gZnJvbSBcIi4vY29sdW1uLWNlbGwuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7RGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlfSBmcm9tIFwiLi9jb2x1bW4taGVhZGVyLmRpcmVjdGl2ZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbGliLXRhYmxlLXJlc3BvbnNpdmUtY29sdW1uJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBuYW1lITogICAgIHN0cmluZztcclxuICBASW5wdXQoKSBrZXkhOiAgICAgIHN0cmluZztcclxuICBASW5wdXQoKSB0eXBlITogICAgIHN0cmluZztcclxuICBASW5wdXQoKSBtaW5XaWR0aCE6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aCE6ICAgIG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhXaWR0aCE6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdHlsZSE6IHttaW5XaWR0aDogbnVtYmVyLCBtYXhXaWR0aDogbnVtYmVyOyB3aWR0aDogbnVtYmVyfTtcclxuXHJcbiAgQElucHV0KCdjZWxsVGVtcGxhdGUnKVxyXG4gIF9jZWxsVGVtcGxhdGVJbnB1dCE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxyXG4gIF9jZWxsVGVtcGxhdGVRdWVyeSE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBjZWxsVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2VsbFRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fY2VsbFRlbXBsYXRlUXVlcnk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2hlYWRlclRlbXBsYXRlJylcclxuICBfaGVhZGVyVGVtcGxhdGVJbnB1dCE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgX2hlYWRlclRlbXBsYXRlUXVlcnkhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgaGVhZGVyVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyVGVtcGxhdGVJbnB1dCB8fCB0aGlzLl9oZWFkZXJUZW1wbGF0ZVF1ZXJ5O1xyXG4gIH1cclxufVxyXG4iXX0=