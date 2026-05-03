import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-stats.html',
  styleUrls: ['./task-stats.scss']
})
export class TaskStatsComponent implements OnInit {
  totalTasks = 0;
  todoTasks = 0;
  inProgressTasks = 0;
  doneTasks = 0;

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe(tasks => {
      this.totalTasks = tasks.length;
      this.todoTasks = tasks.filter(t => t.status === 'todo').length;
      this.inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
      this.doneTasks = tasks.filter(t => t.status === 'done').length;
    });
  }

  ngOnInit(): void {}
}