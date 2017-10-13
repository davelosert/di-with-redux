import {Todo} from '../../state/Todo';
import {TodoRepository} from '../TodoRepository';


export const createMockTodoRepository = (): TodoRepository => ({
  loadAllTODOs: () => Promise.resolve(createMockTodos())
});

const emptyArray = Array(1000).fill(0);
const createMockTodos = () =>
  emptyArray.map((val, index) => ({
	id: index,
	userId: 1,
	title: `Todo#${index}`,
	completed: false
  } as Todo));
