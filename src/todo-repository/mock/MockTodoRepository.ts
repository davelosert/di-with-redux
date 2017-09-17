import {Todo} from '../../state/Todo';
import {TodoRepository} from '../TodoRepository';

const emptyArray = Array(1000).fill(0);
const MOCK_TODOS: Todo[] = emptyArray.map((val, index) => ({
  id: index,
  userId: 1,
  title: `Todo#${index}`,
  completed: false
} as Todo));

export const createMockTodoRepository = (): TodoRepository => ({
  loadAllTODOs: () => Promise.resolve(MOCK_TODOS)
});

