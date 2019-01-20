import { Component } from '@angular/core';
import { Todo } from './models/todo';
import {
  createNewTodo,
  removeTodo,
  updateTodo,
  clearCompleted,
  completeAll
} from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-fp-style';
  todos: Todo[] = [];

  get itemLeft() {
    return this.todos.filter(x => !x.isCompleted).length;
  }
  addTodo(newTodoInput) {
    this.todos = createNewTodo(newTodoInput.value, this.todos);
    newTodoInput.value = '';
  }

  remove(todo) {
    this.todos = removeTodo(todo.id, this.todos);
  }

  toggleComplete(todo) {
    let updateTodoItem = { ...todo, isCompleted: !todo.isCompleted };
    this.todos = updateTodo(updateTodoItem, this.todos);
  }

  update(todo: Todo, updateValue) {
    let updateTodoItem = { ...todo, item: updateValue, isEditing: false };
    this.todos = updateTodo(updateTodoItem, this.todos);
  }

  completeAll() {
    this.todos = completeAll(this.todos);
  }

  clearComplete() {
    this.todos = clearCompleted(this.todos);
  }
}
