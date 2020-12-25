import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';

xdescribe('TodoListComponent', () => {
    let component: TodoContainerComponent;
    let fixture: ComponentFixture<TodoContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TodoContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
