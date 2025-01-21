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


  loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = savedTasks;
  }


  toggleCompletion(task: any) {
    task.completed = !task.completed;
    this.saveTasks();
  }


  deleteTask(index: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }


  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
