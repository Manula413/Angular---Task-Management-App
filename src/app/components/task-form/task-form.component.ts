import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskTitle = '';

  constructor(private router: Router) {}

  addTask() {
    if (this.taskTitle.trim()) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const newTask = {
        id: tasks.length + 1,
        title: this.taskTitle,
        completed: false,
      };
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.router.navigate(['/']);
    }
  }
}
