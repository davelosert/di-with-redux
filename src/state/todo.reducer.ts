import {TodoListState} from './TodoListState';
import {TODO_ACTIONS} from './todo.actions';


export const todo = (state: TodoListState, action)=> {
  const {type, payload} = action;

  switch(type) {
    case TODO_ACTIONS.LOADING_TODOS:
      return {
        ...state,
        loading: true
      };
    case TODO_ACTIONS.LOAD_TODOS_SUCCESS:
    return {
      ...state,
      todos: payload,
      loading: false
    };
    default:
      return state;
  }
};