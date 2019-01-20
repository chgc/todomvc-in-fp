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
  public static getState(state: TodoStateModel) {
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
  public add(ctx: StateContext<TodoStateModel>, { payload }: TodoAction) {
    const stateModel = ctx.getState();
    ctx.setState({
      ...stateModel,
      items: createNewTodo(payload, stateModel.items)
    });
  }

  @Action(UpdateTodoAction)
  public update(
    ctx: StateContext<TodoStateModel>,
    { payload }: UpdateTodoAction
  ) {
    const stateModel = ctx.getState();
    ctx.setState({
      ...stateModel,
      items: updateTodo(payload, stateModel.items)
    });
  }

  @Action(RemoveTodoAction)
  public remove(
    ctx: StateContext<TodoStateModel>,
    { payload }: RemoveTodoAction
  ) {
    const stateModel = ctx.getState();
    ctx.setState({
      ...stateModel,
      items: removeTodo(payload.id, stateModel.items)
    });
  }

  @Action(CompleteAllAction)
  public completeAll(ctx: StateContext<TodoStateModel>) {
    const stateModel = ctx.getState();
    ctx.setState({
      ...stateModel,
      items: completeAll(stateModel.items)
    });
  }

  @Action(ClearCompleteAction)
  public clearComplete(ctx: StateContext<TodoStateModel>) {
    const stateModel = ctx.getState();
    ctx.setState({
      ...stateModel,
      items: clearCompleted(stateModel.items)
    });
  }
}
