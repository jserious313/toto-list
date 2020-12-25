import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full',
    },
    {
        path: 'todo-list',
        loadChildren: () =>
            import('./features/todo/todo.module').then(
                (m) => m.TodoModule
            ),
    },
    {
        path: '**',
        redirectTo: 'todo-list',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
