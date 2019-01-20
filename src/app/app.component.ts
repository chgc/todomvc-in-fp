import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { createNewTodo } from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-fp-style';
  todos: Todo[] = [];

  addTodo(newTodoInput) {
    this.todos = createNewTodo(newTodoInput.value, this.todos);
    newTodoInput.value = '';
  }
}
