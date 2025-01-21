import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  newTaskTitle: string = '';

  constructor(private router: Router) {}

  addTask() {
    if (this.newTaskTitle.trim() === '') {
      return; // Don't add an empty task
    }

    const newTask = {
      id: Date.now(), // Unique ID based on the current timestamp
      title: this.newTaskTitle,
      completed: false,
    };

    // Get existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Add the new task to the list
    tasks.push(newTask);

    // Save the updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Redirect back to the task list
    this.router.navigate(['/']);
  }
}
