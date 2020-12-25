import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface State {
    router: RouterReducerState<any>;
}

export const reducer = routerReducer;
