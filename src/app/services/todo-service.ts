import {
  map,
  append,
  curry,
  propEq,
  reject,
  identity,
  useWith,
  converge,
  flip
} from 'ramda';

//const addTodo = (todo, todos) => [...todos, todo];
// a → [a] → [a]
const addTodo = append;

const getNewId = todos =>
  todos.length === 0 ? 1 : Math.max(...todos.map(x => x.id)) + 1;

const newTodo = curry((item, id) => ({
  id,
  item,
  isCompleted: false,
  isEditing: false
}));

// (item, todos) -> item
const createNewItem = useWith(newTodo, [identity, getNewId]);

// (item, todos) -> todos
export const createNewTodo = converge(addTodo, [createNewItem, flip(identity)]);

const findAndReplace = curry((newTodo, oldTodo) =>
  oldTodo.id === newTodo.id ? newTodo : oldTodo
);

//const updateTodo = (todo, todos) => todos.map(x => findAndReplace(todo, x));
// (item, todos) -> todos;
export const updateTodo = useWith(map, [findAndReplace, identity]);

// const removeTodo = (id, todos) => todos.filter(x => x.id !== id);
// export const removeTodo = id => reject(propEq('id', id));
// (item, todos) -> todos
export const removeTodo = useWith(reject, [propEq('id'), identity]);
