import { Directive, EventEmitter, Optional, Output } from '@angular/core';
import { CdkDropList } from "@angular/cdk/drag-drop";
import { DragAndAccess } from "./drag-and-access";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "@angular/cdk/bidi";
export class DragAndAccessList extends CdkDropList {
    constructor(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group) {
        super(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group);
        this.dragAndAccessDropped = new EventEmitter();
        this.dropped.subscribe((event) => {
            const customEvent = new DragAndAccess(event.previousIndex, event.currentIndex, event.item, event.container, event.previousContainer, event.isPointerOverContainer, event.distance, event.dropPoint, event.event);
            this.dragAndAccessDropped.emit(customEvent);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DragAndAccessList, deps: [{ token: i0.ElementRef }, { token: i1.DragDrop }, { token: i0.ChangeDetectorRef }, { token: i2.ScrollDispatcher }, { token: i3.Directionality, optional: true }, { token: i1.CdkDropListGroup, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.0", type: DragAndAccessList, selector: "[DragAndAccessList]", outputs: { dragAndAccessDropped: "dragAndAccessDropped" }, exportAs: ["cdkDropAndAccessList"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DragAndAccessList, decorators: [{
            type: Directive,
            args: [{
                    selector: '[DragAndAccessList]',
                    exportAs: 'cdkDropAndAccessList',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.DragDrop }, { type: i0.ChangeDetectorRef }, { type: i2.ScrollDispatcher }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1.CdkDropListGroup, decorators: [{
                    type: Optional
                }] }], propDecorators: { dragAndAccessDropped: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtYWNjZXNzLWxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9kcmFnLWFuZC1hY2Nlc3Mvc3JjL2xpYi9kcmFnLWFuZC1hY2Nlc3MtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBYyxZQUFZLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQXVCLFdBQVcsRUFBNkMsTUFBTSx3QkFBd0IsQ0FBQztBQUNySCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUWhELE1BQU0sT0FBTyxpQkFBMkIsU0FBUSxXQUFjO0lBRzVELFlBQ0UsT0FBZ0MsRUFDaEMsUUFBa0IsRUFDbEIsa0JBQXFDLEVBQ3JDLGlCQUFtQyxFQUN2QixJQUFvQixFQUNwQixNQUFxQztRQUVqRCxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFWdEUseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFZMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxhQUFhLENBQ25DLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLEVBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFNBQVMsRUFDZixLQUFLLENBQUMsaUJBQWlCLEVBQ3ZCLEtBQUssQ0FBQyxzQkFBc0IsRUFDNUIsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsU0FBUyxFQUNmLEtBQUssQ0FBQyxLQUFLLENBQ1osQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTNCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7MEJBU0ksUUFBUTs7MEJBQ1IsUUFBUTt5Q0FSRCxvQkFBb0I7c0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZywgQ2RrRHJhZ0Ryb3AsIENka0Ryb3BMaXN0LCBDZGtEcm9wTGlzdEdyb3VwLCBEcmFnRHJvcCwgRHJhZ0Ryb3BDb25maWd9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQge0RyYWdBbmRBY2Nlc3N9IGZyb20gXCIuL2RyYWctYW5kLWFjY2Vzc1wiO1xuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9iaWRpXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tEcmFnQW5kQWNjZXNzTGlzdF0nLFxuICBleHBvcnRBczogJ2Nka0Ryb3BBbmRBY2Nlc3NMaXN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0FuZEFjY2Vzc0xpc3Q8VCwgTywgST4gZXh0ZW5kcyBDZGtEcm9wTGlzdDxUPiB7XG4gIEBPdXRwdXQoKSBkcmFnQW5kQWNjZXNzRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0FuZEFjY2VzczxULCBPLCBJPj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBkcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBfc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICBAT3B0aW9uYWwoKSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBfZ3JvdXA6IENka0Ryb3BMaXN0R3JvdXA8Q2RrRHJvcExpc3Q+LFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50LCBkcmFnRHJvcCwgX2NoYW5nZURldGVjdG9yUmVmLCBfc2Nyb2xsRGlzcGF0Y2hlciwgX2RpciwgX2dyb3VwKTtcblxuICAgIHRoaXMuZHJvcHBlZC5zdWJzY3JpYmUoKGV2ZW50OiBDZGtEcmFnRHJvcDxULCBPPikgPT4ge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgRHJhZ0FuZEFjY2VzczxULCBPLCBJPihcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgZXZlbnQuY3VycmVudEluZGV4LFxuICAgICAgICBldmVudC5pdGVtLFxuICAgICAgICBldmVudC5jb250YWluZXIsXG4gICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLFxuICAgICAgICBldmVudC5pc1BvaW50ZXJPdmVyQ29udGFpbmVyLFxuICAgICAgICBldmVudC5kaXN0YW5jZSxcbiAgICAgICAgZXZlbnQuZHJvcFBvaW50LFxuICAgICAgICBldmVudC5ldmVudFxuICAgICAgKTtcbiAgICAgIHRoaXMuZHJhZ0FuZEFjY2Vzc0Ryb3BwZWQuZW1pdChjdXN0b21FdmVudCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==