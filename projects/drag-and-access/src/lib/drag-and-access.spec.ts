import { CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";
import {DragAndAccess} from "./drag-and-access";

describe('DragAndAccess', () => {
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

  it('should create an instance', () => {
    const dragAndAccess = new DragAndAccess<any, any, any>(
      0,
      1,
      dragItem,
      dropList,
      previousDropList,
      true,
      { x: 100, y: 200 },
      { x: 150, y: 250 },
      mouseEvent
    );
    expect(dragAndAccess).toBeTruthy();
  });

  it('should call callback with item data', () => {
    const dragAndAccess = new DragAndAccess<any, any, any>(
      0,
      1,
      dragItem,
      dropList,
      previousDropList,
      true,
      { x: 100, y: 200 },
      { x: 150, y: 250 },
      mouseEvent
    );

    const callback = jasmine.createSpy('callback');
    dragAndAccess.accessItemValues(callback);

    expect(callback).toHaveBeenCalledWith(dragItem.data);
  });

  it('should log an error if item data is undefined', () => {
    const consoleErrorSpy = spyOn(console, 'error');
    dragItem.data = undefined;

    const dragAndAccess = new DragAndAccess<any, any, any>(
      0,
      1,
      dragItem,
      dropList,
      previousDropList,
      true,
      { x: 100, y: 200 },
      { x: 150, y: 250 },
      mouseEvent
    );

    const callback = jasmine.createSpy('callback');
    dragAndAccess.accessItemValues(callback);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Item data is undefined');
  });

  it('should get item data', () => {
    const dragAndAccess = new DragAndAccess<any, any, any>(
      0,
      1,
      dragItem,
      dropList,
      previousDropList,
      true,
      { x: 100, y: 200 },
      { x: 150, y: 250 },
      mouseEvent
    );

    const i = dragAndAccess.accessItem();

    expect(i).toEqual({ id: 1, name: 'Test Item'});
  });
});
