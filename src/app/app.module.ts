import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
    imports: [
        // core
        CoreModule,

        // app
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
