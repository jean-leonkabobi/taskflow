import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-filters.html',
  styleUrls: ['./task-filters.scss']
})
export class TaskFiltersComponent {
  @Output() filterChange = new EventEmitter<any>();

  filters: any = {};

  onFilterChange(key: string, event: any): void {
    this.filters[key] = event.target.value;
    this.filterChange.emit(this.filters);
  }
}