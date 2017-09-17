import * as React from 'react';
import {TodoListState} from '../state/TodoListState';

export interface TodoListProps extends TodoListState {
  initTodos: () => void;
}

export class TodoList extends React.Component<TodoListProps, any> {
  componentDidMount() {
	this.props.initTodos();
  }

  render() {
	const todos = this.props.todos.map(todo => ( <li key={todo.id}><span>{todo.title}</span></li>));
	return (
	  <div>
		<h1>Todo List:</h1>
		<ul>
		{todos}
		</ul>
		{this.props.loading && <span>Loading Todos...</span>}
	  </div>
	)
  }
}