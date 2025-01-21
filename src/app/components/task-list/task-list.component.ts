import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor() {
    this.loadTasks();
  }

  // Load tasks from localStorage
  loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = savedTasks;
  }

  // Toggle completion status
  toggleCompletion(task: any) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  // Delete a task
  deleteTask(index: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }

  // Save tasks to localStorage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
