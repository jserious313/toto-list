import { createAction, props } from '@ngrx/store';
import {Todo} from '../../../core/model/todo';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success',
    props<{ todoItems: Todo[] }>()
);
export const loadTodosFailure = createAction(
    '[Todo] Load Todos Failure',
    props<{ error: any }>()
);


export const addTodo = createAction('[Todo] Add Todo', props<{ todoItem: Todo }>());
export const addTodoSuccess = createAction(
    '[Todo] Add Todo Success',
    props<{ todoItem: Todo }>()
);
export const addTodoFailure = createAction(
    '[Todo] Add Todo Failure',
    props<{ error: any }>()
);

export const updateTodoDoneState = createAction('[Todo] Update Todo-Done-State', props<{ id: string }>());
export const updateTodoDoneStateSuccess = createAction(
    '[Todo] Update Todo-Done-State Success',
    props<{ updatedTodoItem: Todo }>()
);
export const updateTodoDoneStateFailure = createAction(
    '[Todo] Update Todo-Done-State Failure',
    props<{ error: any }>()
);


export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: string }>());
export const deleteTodoSuccess = createAction(
    '[Todo] Delete Todo Success',
    props<{ id: string }>()
);
export const deleteTodoFailure = createAction(
    '[Todo] Delete Todo Failure',
    props<{ error: any }>()
);
