import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoRoutingModule } from './todo-routing.module';
import { reducer, todoFeatureKey } from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';
import { SharedModule } from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [TodoContainerComponent],
    imports: [
        SharedModule,
        TodoRoutingModule,

        StoreModule.forFeature(todoFeatureKey, reducer),
        EffectsModule.forFeature([TodoEffects]),
        ReactiveFormsModule,
    ],
})
export class TodoModule {}
