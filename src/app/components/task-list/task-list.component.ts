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
    // Load tasks from localStorage when the component is created
    this.loadTasks();
  }

  // Load tasks from localStorage
  loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = savedTasks;
  }

  // Toggle the completion status of a task and save the updated list
  toggleCompletion(task: any) {
    task.completed = !task.completed;
    // Update the tasks in localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
