import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {todo} from './state/todo.reducer';
import TodoApp from './containers/TodoApp';

const store = createStore(todo, {
  loading: false,
  todos: []
});
ReactDOM.render(
  <Provider store={store}>
	<TodoApp />
  </Provider>,
  document.getElementById('root')
);