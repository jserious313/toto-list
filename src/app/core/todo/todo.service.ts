import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Todo } from '../model/todo';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private todoItems: Todo[] = [];

    constructor() {}

    readTodos(): Observable<Todo[]> {
        return of(this.todoItems);
    }

    createTodo(newTodo: Todo): Observable<Todo> {
        this.todoItems = [...this.todoItems, newTodo];
        return of(newTodo);
    }
    updateTodoDoneState(id: string): Observable<Todo> {
        let updatedTodoItem: Todo = {id, name: '', done: false};
        this.todoItems = this.todoItems.map((todoItem) => {
            if (todoItem.id === id) {
                updatedTodoItem = {...todoItem, done: !todoItem.done};
                return {...todoItem, done: !todoItem.done};
            } else {
                return todoItem;
            }
        });
        return of(updatedTodoItem);
    }
    deleteTodo(id: string): Observable<string> {
        this.todoItems = this.todoItems.filter(
            (todoItem) => todoItem.id !== id
        );
        return(of(id));
    }
}
