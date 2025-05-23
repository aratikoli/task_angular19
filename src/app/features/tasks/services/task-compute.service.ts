import { Injectable, computed } from '@angular/core';
import { taskStore } from '../store/task.store';
import { Task } from '../../../core/models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskComputeService {

  readonly statusCounts = computed(() => {
    const tasks = taskStore.tasks();  // get current tasks array

    const counts: Record<Task['status'], number> = {
      Pending: 0,
      'In Progress': 0,
      Completed: 0,
    };

    for (const task of tasks as Task[]) {
      if (task.status in counts) {
        counts[task.status as keyof typeof counts]++;
      }
    }

    return counts;
  });

  readonly tasksByDate = computed(() => {
    const tasks = taskStore.tasks();

    const map = new Map<string, number>();

    for (const task of tasks) {
      const dateKey = task.createdAt.toDateString();
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    }

    return Array.from(map.entries()).sort((a, b) =>
      new Date(a[0]).getTime() - new Date(b[0]).getTime()
    );
  });
}
