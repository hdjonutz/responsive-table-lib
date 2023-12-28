import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import * as i0 from "@angular/core";
export class RowsService {
    constructor() {
        this.rowsExpandedObservable = new ReplaySubject(1);
        this.rowsExpanded = [];
        this.rowsExpandedObservable.next(this.rowsExpanded);
    }
    setRows(row) {
        const found = this.isExpanded(row);
        if (found) {
            this.rowsExpanded = this.rowsExpanded.filter((r) => JSON.stringify(row) !== JSON.stringify(r));
        }
        else {
            this.rowsExpanded.push(row);
        }
        this.rowsExpandedObservable.next(this.rowsExpanded);
    }
    isExpanded(row) {
        return !!this.rowsExpanded.find((r) => JSON.stringify(row) === JSON.stringify(r));
    }
    getChanges() {
        return this.rowsExpandedObservable;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUtcmVzcG9uc2l2ZS9zcmMvbGliL3NlcnZpY2VzL3Jvd3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBaUIsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUduRCxNQUFNLE9BQU8sV0FBVztJQUd0QjtRQUZRLDJCQUFzQixHQUErQyxJQUFJLGFBQWEsQ0FBOEIsQ0FBQyxDQUFDLENBQUM7UUFDL0gsaUJBQVksR0FBaUMsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBeUI7UUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLENBQUMsR0FBeUI7UUFDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzsrR0FyQlUsV0FBVzttSEFBWCxXQUFXLGNBREUsTUFBTTs7NEZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBSZXBsYXlTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJvd3NTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJvd3NFeHBhbmRlZE9ic2VydmFibGU6IFJlcGxheVN1YmplY3Q8QXJyYXk8e1trZXk6IHN0cmluZ106IGFueX0+PiA9IG5ldyBSZXBsYXlTdWJqZWN0PEFycmF5PHtba2V5OiBzdHJpbmddOiBhbnl9Pj4oMSk7XHJcbiAgcm93c0V4cGFuZGVkOiAgQXJyYXk8e1trZXk6IHN0cmluZ106IGFueX0+ID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJvd3NFeHBhbmRlZE9ic2VydmFibGUubmV4dCh0aGlzLnJvd3NFeHBhbmRlZCk7XHJcbiAgfVxyXG5cclxuICBzZXRSb3dzKHJvdzoge1trZXk6IHN0cmluZ106IGFueX0pIHtcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5pc0V4cGFuZGVkKHJvdyk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgdGhpcy5yb3dzRXhwYW5kZWQgPSB0aGlzLnJvd3NFeHBhbmRlZC5maWx0ZXIoKHIpID0+IEpTT04uc3RyaW5naWZ5KHJvdykgIT09IEpTT04uc3RyaW5naWZ5KHIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm93c0V4cGFuZGVkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHRoaXMucm93c0V4cGFuZGVkT2JzZXJ2YWJsZS5uZXh0KHRoaXMucm93c0V4cGFuZGVkKTtcclxuICB9XHJcbiAgaXNFeHBhbmRlZChyb3c6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnJvd3NFeHBhbmRlZC5maW5kKChyKSA9PiBKU09OLnN0cmluZ2lmeShyb3cpID09PSBKU09OLnN0cmluZ2lmeShyKSk7XHJcbiAgfVxyXG4gIGdldENoYW5nZXMoKTogT2JzZXJ2YWJsZTxBcnJheTx7W2tleTogc3RyaW5nXTogYW55fT4+IHtcclxuICAgIHJldHVybiB0aGlzLnJvd3NFeHBhbmRlZE9ic2VydmFibGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==