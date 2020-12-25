import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.state';
import { todoFeatureKey } from './todo.reducer';

export const selectTodoState = createFeatureSelector<State>(todoFeatureKey);

export const selectTodoItems = createSelector(
    selectTodoState,
    (state) => state.todoItems
);
