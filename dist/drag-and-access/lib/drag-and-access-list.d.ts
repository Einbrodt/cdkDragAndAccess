/// <reference path="drag-and-access-list.ngtypecheck.d.ts" />
import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { CdkDropList, CdkDropListGroup, DragDrop } from "@angular/cdk/drag-drop";
import { DragAndAccess } from "./drag-and-access";
import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { Directionality } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
export declare class DragAndAccessList<T, O, I> extends CdkDropList<T> {
    dragAndAccessDropped: EventEmitter<DragAndAccess<T, O, I>>;
    constructor(element: ElementRef<HTMLElement>, dragDrop: DragDrop, _changeDetectorRef: ChangeDetectorRef, _scrollDispatcher: ScrollDispatcher, _dir: Directionality, _group: CdkDropListGroup<CdkDropList>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DragAndAccessList<any, any, any>, [null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DragAndAccessList<any, any, any>, "[DragAndAccessList]", ["cdkDropAndAccessList"], {}, { "dragAndAccessDropped": "dragAndAccessDropped"; }, never, never, false, never>;
}
