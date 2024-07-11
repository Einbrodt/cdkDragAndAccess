import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDrop} from '@angular/cdk/drag-drop';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Directionality } from '@angular/cdk/bidi';
import { DragAndAccessList } from './drag-and-access-list';

describe('DragAndAccessList', () => {
  let elementRef: ElementRef<HTMLElement>;
  let dragDrop: DragDrop;
  let changeDetectorRef: ChangeDetectorRef;
  let scrollDispatcher: ScrollDispatcher;
  let directionality: Directionality | null;
  let dropListGroup: CdkDropListGroup<CdkDropList<any>> | null;

  beforeEach(() => {
    const element = document.createElement('div');
    elementRef = new ElementRef<HTMLElement>(element);

    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: elementRef },
        DragDrop,
        ChangeDetectorRef,
        ScrollDispatcher,
        { provide: Directionality, useValue: null },
        { provide: CdkDropListGroup, useValue: null }
      ]
    });

    dragDrop = TestBed.inject(DragDrop);
    changeDetectorRef = TestBed.inject(ChangeDetectorRef);
    scrollDispatcher = TestBed.inject(ScrollDispatcher);
    directionality = TestBed.inject(Directionality);
    dropListGroup = TestBed.inject(CdkDropListGroup);
  });

  it('should create an instance', () => {
    const directive = new DragAndAccessList<any, any, any>(
      elementRef,
      dragDrop,
      changeDetectorRef,
      scrollDispatcher,
      directionality!,
      dropListGroup!
    );
    expect(directive).toBeTruthy();
  });

  it('should emit customDropped event when dropped event is triggered', () => {
    const directive = new DragAndAccessList<any, any, any>(
      elementRef,
      dragDrop,
      changeDetectorRef,
      scrollDispatcher,
      directionality!,
      dropListGroup!
    );

    const dropEvent: CdkDragDrop<any, any> = {
      previousIndex: 0,
      currentIndex: 1,
      item: {} as CdkDrag<any>,
      container: {} as CdkDropList<any>,
      previousContainer: {} as CdkDropList<any>,
      isPointerOverContainer: true,
      distance: { x: 10, y: 20 },
      dropPoint: { x: 30, y: 40 },
      event: new MouseEvent('mouseup')
    };

    spyOn(directive.dragAndAccessDropped, 'emit');

    directive.dropped.emit(dropEvent);

    expect(directive.dragAndAccessDropped.emit).toHaveBeenCalledWith(jasmine.objectContaining({
      previousIndex: dropEvent.previousIndex,
      currentIndex: dropEvent.currentIndex,
      item: dropEvent.item,
      container: dropEvent.container,
      previousContainer: dropEvent.previousContainer,
      isPointerOverContainer: dropEvent.isPointerOverContainer,
      distance: dropEvent.distance,
      dropPoint: dropEvent.dropPoint,
      event: dropEvent.event
    }));
  });
});
