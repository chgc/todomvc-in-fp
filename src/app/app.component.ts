import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../todo/todo.state';
import { Observable } from 'rxjs';
import {
  TodoAction,
  RemoveTodoAction,
  UpdateTodoAction,
  CompleteAllAction,
  ClearCompleteAction
} from '../todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-fp-style';
  @Select(TodoState.todos) todos$: Observable<Todo[]>;

  @Select(TodoState.uncompleteTodos) itemLeft$: Observable<Todo[]>;

  constructor(private store: Store) {}

  addTodo(newTodoInput) {
    this.store.dispatch(new TodoAction(newTodoInput.value));
    newTodoInput.value = '';
  }

  remove(todo) {
    this.store.dispatch(new RemoveTodoAction(todo));
  }

  toggleComplete(todo) {
    const updateTodoItem = { ...todo, isCompleted: !todo.isCompleted };
    this.store.dispatch(new UpdateTodoAction(updateTodoItem));
  }

  update(todo: Todo, updateValue) {
    const updateTodoItem = { ...todo, item: updateValue, isEditing: false };
    this.store.dispatch(new UpdateTodoAction(updateTodoItem));
  }

  completeAll() {
    this.store.dispatch(new CompleteAllAction());
  }

  clearComplete() {
    this.store.dispatch(new ClearCompleteAction());
  }
}
