import {connect} from 'react-redux';
import {TodoList} from '../components/TodoList';
import {fetchAllTodos} from '../todo-repository/fetch-todos-thunk';

const mapStateToProps = ({loading, todos}) => {
  return {
    loading,
    todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initTodos: () => dispatch(fetchAllTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
