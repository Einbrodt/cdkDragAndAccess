import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Inject, Optional, Output} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDrop, DragDropConfig} from "@angular/cdk/drag-drop";
import {DragAndAccess} from "./drag-and-access";
import {ScrollDispatcher} from "@angular/cdk/scrolling";
import {Directionality} from "@angular/cdk/bidi";

@Directive({
  selector: '[DragAndAccessList]',
  exportAs: 'cdkDropAndAccessList',
})
export class DragAndAccessList<T, O, I> extends CdkDropList<T> {
  @Output() dragAndAccessDropped = new EventEmitter<DragAndAccess<T, O, I>>();

  constructor(
    element: ElementRef<HTMLElement>,
    dragDrop: DragDrop,
    _changeDetectorRef: ChangeDetectorRef,
    _scrollDispatcher: ScrollDispatcher,
    @Optional() _dir: Directionality,
    @Optional() _group: CdkDropListGroup<CdkDropList>,
  ) {
    super(element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group);

    this.dropped.subscribe((event: CdkDragDrop<T, O>) => {
      const customEvent = new DragAndAccess<T, O, I>(
        event.previousIndex,
        event.currentIndex,
        event.item,
        event.container,
        event.previousContainer,
        event.isPointerOverContainer,
        event.distance,
        event.dropPoint,
        event.event
      );
      this.dragAndAccessDropped.emit(customEvent);
    });
  }
}
