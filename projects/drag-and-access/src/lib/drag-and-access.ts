import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";

export class DragAndAccess<T, O, I> implements CdkDragDrop<T, O, I> {
  previousIndex: number;
  currentIndex: number;
  item: CdkDrag<I>;
  container: CdkDropList<T>;
  previousContainer: CdkDropList<O>;
  isPointerOverContainer: boolean;
  distance: { x: number; y: number; };
  dropPoint: { x: number; y: number; };
  event: MouseEvent | TouchEvent;

  constructor(
    previousIndex: number,
    currentIndex: number,
    item: CdkDrag<I>,
    container: CdkDropList<T>,
    previousContainer: CdkDropList<O>,
    isPointerOverContainer: boolean,
    distance: { x: number; y: number; },
    dropPoint: { x: number; y: number; },
    event: MouseEvent | TouchEvent
  ) {
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

  accessItemValues(callback: (data: I) => void): void {
    if (this.item.data) {
      const data = this.item.data as I;
      callback(data);
    } else {
      console.error('Item data is undefined');
    }
  }
  accessItem(): I | null {
    try {
      return this.item.data as I
    } catch (e) {
      return null
    }
  }
}
