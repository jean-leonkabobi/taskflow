import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.scss']
})
export class TaskFormComponent {
  @Input() task: Task | null = null;
  @Output() save = new EventEmitter<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>();
  @Output() close = new EventEmitter<void>();

  title = '';
  description = '';
  status: 'todo' | 'in-progress' | 'done' = 'todo';
  priority: 'low' | 'medium' | 'high' = 'medium';
  assignedTo = '';

  ngOnInit(): void {
    if (this.task) {
      this.title = this.task.title;
      this.description = this.task.description;
      this.status = this.task.status;
      this.priority = this.task.priority;
      this.assignedTo = this.task.assignedTo;
    }
  }

  onSubmit(): void {
    this.save.emit({
      title: this.title,
      description: this.description,
      status: this.status,
      priority: this.priority,
      assignedTo: this.assignedTo
    });
  }
}