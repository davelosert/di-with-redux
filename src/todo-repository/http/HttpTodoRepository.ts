import {TodoRepository} from '../TodoRepository';

export const createHTTPTodoRepository = (baseURL: string): TodoRepository => {
   return {
    loadAllTODOs: () => fetch(`${baseURL}/todos`).then(result => result.json())
   }
};