import {TodoRepository} from './TodoRepository';
import {loadingTodos, loadTodosSuccess} from '../state/todo.actions';
import {Todo} from '../state/Todo';

export const fetchAllTodos = () =>
  (dispatch, getState, todoRepository: TodoRepository) => {
	dispatch(loadingTodos());
	todoRepository.loadAllTODOs().then((todos: Todo[]) => {
	  dispatch(loadTodosSuccess(todos));
	});
  };

