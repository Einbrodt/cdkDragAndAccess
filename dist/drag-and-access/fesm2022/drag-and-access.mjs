import * as i0 from '@angular/core';
import { EventEmitter, Directive, Optional, Output } from '@angular/core';
import * as i1 from '@angular/cdk/drag-drop';
import { CdkDropList } from '@angular/cdk/drag-drop';
import * as i2 from '@angular/cdk/scrolling';
import * as i3 from '@angular/cdk/bidi';

class DragAndAccess {
    constructor(previousIndex, currentIndex, item, container, previousContainer, isPointerOverContainer, distance, dropPoint, event) {
        this.previousIndex = previousIndex;
        this.currentIndex = currentIndex;
        this.item = item;
        this.container = container;
        this.previousContainer = previousContainer;
        this.isPointerOverContainer = isPointerOverContainer;
        this.distance = distance;
        this.dropPoint = dropPoint;
        this.event = event;
    }
    accessItemValues(callback) {
        if (this.item.data) {
            const data = this.item.data;
            callback(data);
        }
        else {
            console.error('Item data is undefined');
        }
    }
}

class DragAndAccessList extends CdkDropList {
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

function convertToCdkDragAndAccess(event) {
    return new DragAndAccess(event.previousIndex, event.currentIndex, event.item, event.container, event.previousContainer, event.isPointerOverContainer, event.distance, event.dropPoint, event.event);
}

/*
 * Public API Surface of drag-and-access
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DragAndAccess, DragAndAccessList, convertToCdkDragAndAccess };
//# sourceMappingURL=drag-and-access.mjs.map
