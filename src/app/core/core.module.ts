import { NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers, State } from './app-state/app-state.reducer';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {reducer, routerFeatureKey} from './router-state/router.reducer';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

// export const reducers: ActionReducerMap<State> = {
//     auth: authReducer,
//     settings: settingsReducer,
//     router: routerReducer
// };

// export const metaReducers: MetaReducer<AppState>[] = [
//     initStateFromLocalStorage
// ];

@NgModule({
    declarations: [],
    imports: [
        // angular
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,

        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictStateSerializability: true,
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictActionTypeUniqueness: true,
            },
        }),
        StoreModule.forFeature(routerFeatureKey, reducer),
        // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        !environment.production ? [StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})] : [],
    ],
    providers: [
        // ...configureDefaultInterceptors(defaultInterceptorOptions),
        // {provide: ErrorHandler, useClass: GlobalErrorHandler}
    ]
})
export class CoreModule {}
