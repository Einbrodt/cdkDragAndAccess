/// <reference path="drag-and-access-utils.ngtypecheck.d.ts" />
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { DragAndAccess } from "./drag-and-access";
export declare function convertToCdkDragAndAccess<T>(event: CdkDragDrop<T[]>): DragAndAccess<T[], any, T>;
