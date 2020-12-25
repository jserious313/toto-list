import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { State } from './todo.state';

export const todoFeatureKey = 'todo';

export const initialState: State = {
    todoItems: [],
};

export const reducer = createReducer(
    initialState,

    on(TodoActions.loadTodos, (state) => state),
    on(TodoActions.loadTodosSuccess, (state, { todoItems }) => ({
        ...state,
        todoItems,
    })),
    on(TodoActions.loadTodosFailure, (state, action) => state),

    on(TodoActions.addTodoSuccess, (state, { todoItem }) => {
        return {
            ...state,
            todoItems: [...state.todoItems, todoItem],
        };
    }),
    on(TodoActions.updateTodoDoneStateSuccess, (state, { updatedTodoItem }) => {
        return {
            ...state,
            todoItems: state.todoItems.map((todoItem) => {
                if (updatedTodoItem.id === todoItem.id) {
                    return updatedTodoItem;
                } else {
                    return todoItem;
                }
            }),
        };
    }),
    on(TodoActions.deleteTodoSuccess, (state, { id }) => {
        return {
            ...state,
            todoItems: state.todoItems.filter((todoItem) => {
                return todoItem.id !== id;
            }),
        };
    })
);
