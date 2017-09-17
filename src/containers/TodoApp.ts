import {connect} from 'react-redux';
import {TodoList} from '../components/TodoList';

export function mapStateToProps({loading, todos}) {
  return {
    loading,
    todos
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
