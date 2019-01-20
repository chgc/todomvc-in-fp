import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TodoState, TodoStateModel } from './todo.state';
import { TodoAction } from './todo.actions';

describe('Todo store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodoState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: TodoStateModel = {
      items: ['item-1']
    };
    store.dispatch(new TodoAction('item-1'));
    const actual = store.selectSnapshot(TodoState.getState);
    expect(actual).toEqual(expected);
  });

});
