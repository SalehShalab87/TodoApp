import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, StatusPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo.id);
  }

  delete(todo: Todo) {
    if (confirm('Are you sure you want to delete this todo? ' + todo.title)) {
      this.todoService.deleteTodo(todo.id);
    }
  }
}
