import {Todo} from './Todo';

export const TODO_ACTIONS = {
  LOADING_TODOS: 'LOADING_TODOS',
  LOAD_TODOS_SUCCESS: 'LOAD_TODOS_SUCCESS'
};

export const loadingTodos = () => ({
  type: TODO_ACTIONS.LOADING_TODOS
});

export const loadTodosSuccess = (todos: Todo[]) => ({
 type: TODO_ACTIONS.LOAD_TODOS_SUCCESS,
 payload: todos
});