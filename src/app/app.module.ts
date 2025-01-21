// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { HeaderComponent } from './header/header.component'; // Ensure HeaderComponent is imported

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    HeaderComponent, // HeaderComponent is declared here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
