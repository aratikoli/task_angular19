import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { taskStore } from '../store/task.store';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent {
  store = taskStore;
  tasks = this.store.tasks;
}
