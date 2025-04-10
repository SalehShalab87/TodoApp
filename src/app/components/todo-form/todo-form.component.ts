import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  taskTitle: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.taskTitle.trim()) {
      this.todoService.addTodo(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
