import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {DragAndAccess} from "./drag-and-access";

export function convertToCdkDragAndAccess<T>(event: CdkDragDrop<T[]>): DragAndAccess<T[], any, T> {
  return new DragAndAccess<T[], any, T>(
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
}
