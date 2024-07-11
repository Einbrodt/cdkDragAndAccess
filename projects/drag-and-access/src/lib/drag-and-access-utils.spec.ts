import { CdkDrag, CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";
import { convertToCdkDragAndAccess } from "./drag-and-access-utils";

describe('convertToCdkDragAndAccess', () => {
  let dragItem: CdkDrag<any>;
  let dropList: CdkDropList<any>;
  let previousDropList: CdkDropList<any>;
  let mouseEvent: MouseEvent;

  beforeEach(() => {
    dragItem = {
      data: { id: 1, name: 'Test Item' }
    } as CdkDrag<any>;

    dropList = {} as CdkDropList<any>;
    previousDropList = {} as CdkDropList<any>;
    mouseEvent = new MouseEvent('mouseup');
  });

  it('should convert CdkDragDrop event to DragAndAccess event', () => {
    const dragDropEvent: CdkDragDrop<any[]> = {
      previousIndex: 0,
      currentIndex: 1,
      item: dragItem,
      container: dropList,
      previousContainer: previousDropList,
      isPointerOverContainer: true,
      distance: { x: 10, y: 20 },
      dropPoint: { x: 30, y: 40 },
      event: mouseEvent
    };

    const result = convertToCdkDragAndAccess(dragDropEvent);

    expect(result).toEqual(jasmine.objectContaining({
      previousIndex: dragDropEvent.previousIndex,
      currentIndex: dragDropEvent.currentIndex,
      item: dragDropEvent.item,
      container: dragDropEvent.container,
      previousContainer: dragDropEvent.previousContainer,
      isPointerOverContainer: dragDropEvent.isPointerOverContainer,
      distance: dragDropEvent.distance,
      dropPoint: dragDropEvent.dropPoint,
      event: dragDropEvent.event
    }));
  });

  it('should call accessItemValues with correct data', () => {
    const dragDropEvent: CdkDragDrop<any[]> = {
      previousIndex: 0,
      currentIndex: 1,
      item: dragItem,
      container: dropList,
      previousContainer: previousDropList,
      isPointerOverContainer: true,
      distance: { x: 10, y: 20 },
      dropPoint: { x: 30, y: 40 },
      event: mouseEvent
    };

    const result = convertToCdkDragAndAccess(dragDropEvent);

    const callback = jasmine.createSpy('callback');
    result.accessItemValues(callback);

    expect(callback).toHaveBeenCalledWith(dragItem.data);
  });

  it('should log an error if item data is undefined', () => {
    const consoleErrorSpy = spyOn(console, 'error');
    dragItem.data = undefined;

    const dragDropEvent: CdkDragDrop<any[]> = {
      previousIndex: 0,
      currentIndex: 1,
      item: dragItem,
      container: dropList,
      previousContainer: previousDropList,
      isPointerOverContainer: true,
      distance: { x: 10, y: 20 },
      dropPoint: { x: 30, y: 40 },
      event: mouseEvent
    };

    const result = convertToCdkDragAndAccess(dragDropEvent);

    const callback = jasmine.createSpy('callback');
    result.accessItemValues(callback);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Item data is undefined');
  });
});
