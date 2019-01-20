import { Todo } from '../app/models/todo';

export class TodoAction {
  public static readonly type = '[Todo] Add item';
  constructor(public payload: string) {}
}

export class RemoveTodoAction {
  public static readonly type = '[Todo] Remove item';
  constructor(public payload: Todo) {}
}

export class UpdateTodoAction {
  public static readonly type = '[Todo] Update item';
  constructor(public payload: Todo) {}
}

export class CompleteAllAction {
  public static readonly type = '[Todo] CompleteAllTodo item';
}

export class ClearCompleteAction {
  public static readonly type = '[Todo] Clear Complete item';
}
