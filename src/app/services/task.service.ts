import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'taskflow_tasks';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasks();
  }

  private loadTasks(): void {
    const tasksJson = localStorage.getItem(this.STORAGE_KEY);
    const tasks = tasksJson ? JSON.parse(tasksJson) : [];
    this.tasksSubject.next(tasks);
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
    const tasks = this.getTasks();
    const newTask: Task = {
      ...task,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.getTasks().map(task =>
      task.id === updatedTask.id ? { ...updatedTask, updatedAt: new Date() } : task
    );
    this.saveTasks(tasks);
  }

  deleteTask(taskId: string): void {
    const tasks = this.getTasks().filter(task => task.id !== taskId);
    this.saveTasks(tasks);
  }

  getTasksByStatus(status: string): Task[] {
    return this.getTasks().filter(task => task.status === status);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}