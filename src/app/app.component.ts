import { Component } from '@angular/core';
import { TaskFormComponent } from './features/tasks/task-form/task-form.component';
import { TaskTableComponent } from './features/tasks/task-table/task-table.component';
import { TaskChartComponent } from './features/tasks/task-charts/task-charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskTableComponent,TaskChartComponent],
  templateUrl: './app.component.html',  // point to external html
})
export class AppComponent {}
