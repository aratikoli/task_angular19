import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { taskStore } from '../store/task.store';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  private fb = inject(FormBuilder);
  private store = taskStore;

  form = this.fb.group({
    title: ['', Validators.required],
    status: ['Pending', Validators.required],
  });

  addTask() {
    if (this.form.valid) {
      const newTask: Omit<Task, 'id' | 'createdAt'> = {
        title: this.form.value.title ?? '',
        status: this.form.value.status as Task['status'],
      };

      this.store.add(newTask);
      this.form.reset({ title: '', status: 'Pending' });
    }
  }
}
