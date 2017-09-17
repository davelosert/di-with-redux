import * as React from 'react';
import {TodoListState} from '../state/TodoListState';

export interface TodoListProps extends TodoListState {}
export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const todos = this.props.todos.map(todo => ( <span>{todo.title}</span> ));
	return (
	  <div>
		<h1>Todo List:</h1>
		{todos}
		{this.props.loading && <span>Loading Todos...</span>}
	  </div>
	)
  }
}