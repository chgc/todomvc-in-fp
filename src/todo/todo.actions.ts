import { Todo } from '../app/models/todo';

export class TodoAction {
  static readonly type = '[Todo] Add item';
  constructor(public payload: string) {}
}

export class RemoveTodoAction {
  static readonly type = '[Todo] Remove item';
  constructor(public payload: Todo) {}
}

export class UpdateTodoAction {
  static readonly type = '[Todo] Update item';
  constructor(public payload: Todo) {}
}

export class CompleteAllAction {
  static readonly type = '[Todo] CompleteAllTodo item';
}

export class ClearCompleteAction {
  static readonly type = '[Todo] Clear Complete item';
}
