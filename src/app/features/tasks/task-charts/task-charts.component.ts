import { Component, computed, inject } from '@angular/core';
import { ChartData } from 'chart.js';
import { TaskComputeService } from '../services/task-compute.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-task-chart',
  standalone: true,
   imports: [CommonModule,BaseChartDirective],
  templateUrl: './task-charts.component.html',
  styleUrls: ['./task-charts.component.css'],
})
export class TaskChartComponent {
  private compute = inject(TaskComputeService);

  statusChart = computed<ChartData<'pie'>>(() => ({
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        data: Object.values(this.compute.statusCounts()),
        backgroundColor: ['orange', 'blue', 'green'],
      },
    ],
  }));

  barChart = computed<ChartData<'bar'>>(() => {
    const tasksByDate = this.compute.tasksByDate();
    return {
      labels: tasksByDate.map(([date]) => date),
      datasets: [
        {
          label: 'Tasks by Date',
          data: tasksByDate.map(([, count]) => count),
          backgroundColor: 'purple',
        },
      ],
    };
  });
}
