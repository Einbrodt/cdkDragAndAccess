# DragAndAccess
## Description
Currently, there isn't a way to access the values of a dropped item beyond the HTML properties in Angular's CDK drag-and-drop module.

The Drag-and-Access library addresses this limitation by allowing you to access and use the values from your interfaces directly within your drag-and-drop interactions.

## Installation
```bash
npm install drag-and-access
```

## Usage
### Step 1: Import the module
```typescript
import { DragAndAccessModule } from 'drag-and-access';

@NgModule({
  imports: [
    DragAndAccessModule
  ]
})

export class AppModule { }
```

### Step 2: Add drop functionality as normal according to the Angular CDK documentation
