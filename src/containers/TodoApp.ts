import {connect} from 'react-redux';
import {TodoList} from '../components/TodoList';
import {fetchAllTodos} from '../todo-repository/fetch-todos-thunk';

export function mapStateToProps({loading, todos}) {
  return {
    loading,
    todos
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    initTodos: () => dispatch(fetchAllTodos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
