import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

import { selectTodoItems } from '../state/todo.selectors';
import { Observable } from 'rxjs';
import {
    addTodo,
    deleteTodo,
    loadTodos,
    updateTodoDoneState,
} from '../state/todo.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-container.component.html',
    styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent implements OnInit {
    displayedColumns: string[] = ['name'];

    constructor(private store: Store, private fb: FormBuilder) {}

    todoForm: FormGroup;

    todoItems$: Observable<any>;

    ngOnInit(): void {
        this.todoForm = this.fb.group({
            id: [''],
            name: [''],
            done: [false],
        });
        this.todoItems$ = this.store.pipe(select(selectTodoItems));

        this.store.dispatch(loadTodos());
    }

    addTodoItem(): void {
        console.log('adding item');
        const name = this.todoForm.value.name;
        const done = this.todoForm.value.done;
        // todo additem!
        this.store.dispatch(addTodo({ todoItem: { id: uuid(), name, done } }));
    }

    deleteTodoItem(id: string): void {
        this.store.dispatch(deleteTodo({ id }));
    }

    editTodoItem(id: string): void {}

    changeTodoDoneState(id: string): void {
        this.store.dispatch(updateTodoDoneState({ id }));
    }
}
