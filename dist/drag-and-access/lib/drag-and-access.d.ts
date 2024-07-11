/// <reference path="drag-and-access.ngtypecheck.d.ts" />
import { CdkDrag, CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";
export declare class DragAndAccess<T, O, I> implements CdkDragDrop<T, O, I> {
    previousIndex: number;
    currentIndex: number;
    item: CdkDrag<I>;
    container: CdkDropList<T>;
    previousContainer: CdkDropList<O>;
    isPointerOverContainer: boolean;
    distance: {
        x: number;
        y: number;
    };
    dropPoint: {
        x: number;
        y: number;
    };
    event: MouseEvent | TouchEvent;
    constructor(previousIndex: number, currentIndex: number, item: CdkDrag<I>, container: CdkDropList<T>, previousContainer: CdkDropList<O>, isPointerOverContainer: boolean, distance: {
        x: number;
        y: number;
    }, dropPoint: {
        x: number;
        y: number;
    }, event: MouseEvent | TouchEvent);
    accessItemValues(callback: (data: I) => void): void;
}
