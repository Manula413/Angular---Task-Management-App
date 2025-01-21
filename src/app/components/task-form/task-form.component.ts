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
  newTaskDescription: string = '';  // New description field

  constructor(private router: Router) {}

  addTask(): void {
    const trimmedTitle = this.newTaskTitle.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      description: this.newTaskDescription.trim(),  // Include description
      completed: false,
    };

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.newTaskTitle = ''; // Clear the title input
    this.newTaskDescription = '';  // Clear the description input
    this.router.navigate(['/']); // Navigate back
  }
}
