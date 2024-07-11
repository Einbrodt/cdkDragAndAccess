# DragAndAccess

## Description

Currently, there isn't a way to access the values of a dropped item beyond the HTML properties in Angular's CDK drag-and-drop module. 

The Drag-and-Access library addresses this limitation by allowing you to access and use the values from your interfaces directly within your drag-and-drop interactions.

## Installation

```bash
npm install drag-and-access
```

## Usage
Import the DragAndAccessModule in your Angular module:
  
  ```typescript
  import { DragAndAccessModule } from 'drag-and-access';

  @NgModule({
    imports: [
      DragAndAccessModule
    ]
  })

  export class AppModule { }
  ```

Example component:
```typescript
interface Task {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-task-manager',
  template: `
    <h3>Todo</h3>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Description</th>
      </tr>
      <tr *ngFor="let item of todo">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </table>

    <h3>Done</h3>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Description</th>
      </tr>
      <tr *ngFor="let item of done">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  todo: Task[] = [
    { id: 1, name: 'Get up', description: 'Wake up from sleep and get out of bed' },
    { id: 2, name: 'Brush teeth', description: 'Brush your teeth to maintain oral hygiene' },
    { id: 3, name: 'Take a shower', description: 'Take a shower to clean your body' },
    { id: 4, name: 'Check e-mail', description: 'Check your email for new messages' },
    { id: 5, name: 'Walk dog', description: 'Take your dog for a walk in the neighborhood' }
  ];

  done: Task[] = [
    { id: 6, name: 'Get to work', description: 'Travel to your workplace' },
    { id: 7, name: 'Pick up groceries', description: 'Buy groceries from the store' },
    { id: 8, name: 'Go home', description: 'Return to your home after work or errands' },
    { id: 9, name: 'Fall asleep', description: 'Go to bed and fall asleep' }
  ];

  drop(event: CdkDragDrop<Task[]>): void {
    const customEvent = convertToCdkDragAndAccess(event) ;
    
    customEvent.accessItemValues(data => {
      newTask = {
        id: data.id + 10,
        name: "new: " + data.name,
        description: "new: " + data.description
      };
      console.log('ID:', data.id);
      console.log('Name:', data.name);
      console.log('Description:', data.description);
    });
  }
}
```
