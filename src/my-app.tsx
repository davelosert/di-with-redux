import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {todo} from './state/todo.reducer';
import TodoApp from './containers/TodoApp';
import thunk from 'redux-thunk';
import {createMockTodoRepository} from './todo-repository/mock/MockTodoRepository';
import {createHTTPTodoRepository} from './todo-repository/http/HttpTodoRepository';
import {TodoListState} from './state/TodoListState';

declare var MOCK_API: boolean;
const todoRepository = MOCK_API ?
  createMockTodoRepository()
  : createHTTPTodoRepository('https://jsonplaceholder.typicode.com');
console.log(`Mock-API: ${MOCK_API}`);
const store = createStore<TodoListState>( todo, {
	loading: false,
	todos: []
  },
  applyMiddleware(
	thunk.withExtraArgument(todoRepository)
  )
);
ReactDOM.render(
  <Provider store={store}>
	<TodoApp/>
  </Provider>,
  document.getElementById('root')
);