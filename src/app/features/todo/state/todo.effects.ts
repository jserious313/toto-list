import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodoActions from './todo.actions';
import { TodoService } from '../../../core/todo/todo.service';
import { Todo } from '../../../core/model/todo';

@Injectable()
export class TodoEffects {
    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            concatMap(() =>
                /** An EMPTY observable only emits completion. Replace with your own observable API request */
                // EMPTY.pipe(
                //     map((data) => TodoActions.loadTodosSuccess({ data })),
                //  catchError((error) =>
                //     of(TodoActions.loadTodosFailure({ error }))
                //   )
                //  )
                this.todoService.readTodos().pipe(
                    map((todoItems: Todo[]) =>
                        TodoActions.loadTodosSuccess({ todoItems })
                    ),
                    catchError((error: any) =>
                        of(TodoActions.loadTodosFailure({ error }))
                    )
                )
            )
        );
    });

    addTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.addTodo),
            concatMap(({ todoItem }) =>
                this.todoService.createTodo(todoItem).pipe(
                    map((createdTodoItem: Todo) =>
                        TodoActions.addTodoSuccess({
                            todoItem: createdTodoItem,
                        })
                    ),
                    catchError((error: any) =>
                        of(TodoActions.addTodoFailure({ error }))
                    )
                )
            )
        );
    });

    updateTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.updateTodoDoneState),
            concatMap(({ id }) =>
                this.todoService.updateTodoDoneState(id).pipe(
                    map((updatedTodoItem: Todo) =>
                        TodoActions.updateTodoDoneStateSuccess({ updatedTodoItem
                        })
                    ),
                    catchError((error: any) =>
                        of(TodoActions.updateTodoDoneStateFailure({ error }))
                    )
                )
            )
        );
    });

    deleteTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            concatMap(({ id }) =>
                this.todoService.deleteTodo(id).pipe(
                    map(() => TodoActions.deleteTodoSuccess({id})),
                    catchError((error: any) =>
                        of(TodoActions.deleteTodoFailure({ error }))
                    )
                )
            )
        );
    });
    constructor(private actions$: Actions, private todoService: TodoService) {}
}
