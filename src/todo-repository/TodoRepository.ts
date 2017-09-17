import {Todo} from '../state/Todo';

export interface TodoRepository {
  loadAllTODOs(): Promise<Todo[]>;
}