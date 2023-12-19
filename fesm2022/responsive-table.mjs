import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ResponsiveTableService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ResponsiveTableComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ResponsiveTableComponent, selector: "lib-responsive-table", ngImport: i0, template: `
    <p>
      responsive-table works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-responsive-table', template: `
    <p>
      responsive-table works!
    </p>
  ` }]
        }] });

class ResponsiveTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableModule, declarations: [ResponsiveTableComponent], exports: [ResponsiveTableComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResponsiveTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ResponsiveTableComponent
                    ],
                    imports: [],
                    exports: [
                        ResponsiveTableComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of responsive-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ResponsiveTableComponent, ResponsiveTableModule, ResponsiveTableService };
//# sourceMappingURL=responsive-table.mjs.map
