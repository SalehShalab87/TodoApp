import { Component } from '@angular/core';
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
