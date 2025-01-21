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

  addTask(): void {
    const trimmedTitle = this.newTaskTitle.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.newTaskTitle = ''; // Clear the input
    this.router.navigate(['/']); // Navigate back
  }
}
