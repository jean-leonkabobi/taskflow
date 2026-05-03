import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card';
import { HeaderComponent } from '../header/header';
import { TaskFormComponent } from '../task-form/task-form';
import { TaskFiltersComponent } from '../task-filters/task-filters';
import { TaskStatsComponent } from '../task-stats/task-stats';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, HeaderComponent, TaskFormComponent, TaskFiltersComponent, TaskStatsComponent],
  templateUrl: './kanban-board.html',
  styleUrls: ['./kanban-board.scss']
})
export class KanbanBoardComponent implements OnInit {
  columns = [
    { title: 'À faire', status: 'todo' as const },
    { title: 'En cours', status: 'in-progress' as const },
    { title: 'Terminé', status: 'done' as const }
  ];

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  showForm = false;
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  getTasksByStatus(status: string): Task[] {
    return this.filteredTasks.filter(task => task.status === status);
  }

  openAddForm(): void {
    this.editingTask = null;
    this.showForm = true;
  }

  onEditTask(task: Task): void {
    this.editingTask = task;
    this.showForm = true;
  }

  onDeleteTask(taskId: string): void {
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      this.taskService.deleteTask(taskId);
    }
  }

  onSaveTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
    if (this.editingTask) {
      this.taskService.updateTask({ ...this.editingTask, ...taskData });
    } else {
      this.taskService.addTask(taskData);
    }
    this.closeForm();
  }

  closeForm(): void {
    this.showForm = false;
    this.editingTask = null;
  }

  onFilterChange(filters: any): void {
    this.filteredTasks = this.tasks.filter(task => {
      const matchStatus = !filters.status || task.status === filters.status;
      const matchPriority = !filters.priority || task.priority === filters.priority;
      const matchAssigned = !filters.assignedTo || task.assignedTo.toLowerCase().includes(filters.assignedTo.toLowerCase());
      return matchStatus && matchPriority && matchAssigned;
    });
  }
}