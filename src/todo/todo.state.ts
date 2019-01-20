import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  TodoAction,
  UpdateTodoAction,
  RemoveTodoAction,
  CompleteAllAction,
  ClearCompleteAction
} from './todo.actions';
import {
  updateTodo,
  removeTodo,
  createNewTodo,
  completeAll,
  clearCompleted
} from '../app/services/todo-service';
import { Todo } from '../app/models/todo';

export interface TodoStateModel {
  items: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
export class TodoState {
  @Selector()
  static getState(state: TodoStateModel) {
    return state;
  }

  @Selector()
  static todos(state: TodoStateModel) {
    return state.items;
  }

  @Selector()
  static uncompleteTodos(state: TodoStateModel) {
    return state.items.filter(x => !x.isCompleted);
  }

  @Action(TodoAction)
  add(ctx: StateContext<TodoStateModel>, { payload }: TodoAction) {
    ctx.setState({
      items: createNewTodo(payload, ctx.getState().items)
    });
  }

  @Action(UpdateTodoAction)
  update(
    ctx: StateContext<TodoStateModel>,
    { payload }: UpdateTodoAction
  ) {
    ctx.patchState({
      items: updateTodo(payload, ctx.getState().items)
    });
  }

  @Action(RemoveTodoAction)
  remove(
    ctx: StateContext<TodoStateModel>,
    { payload }: RemoveTodoAction
  ) {
    ctx.patchState({
      items: removeTodo(payload.id, ctx.getState().items)
    });
  }

  @Action(CompleteAllAction)
  completeAll(ctx: StateContext<TodoStateModel>) {
    ctx.patchState({
      items: completeAll(ctx.getState().items)
    });
  }

  @Action(ClearCompleteAction)
  clearComplete(ctx: StateContext<TodoStateModel>) {
    ctx.patchState({
      items: clearCompleted(ctx.getState().items)
    });
  }
}
