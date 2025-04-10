import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = { 
      id: Date.now(), 
      title, 
      isCompleted: false 
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
