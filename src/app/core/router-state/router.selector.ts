import { createFeatureSelector } from '@ngrx/store';
import { routerFeatureKey, State } from './router.reducer';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

export const selectRouterState = createFeatureSelector<
    State,
    RouterReducerState<any>
>(routerFeatureKey);

const {
    selectQueryParams,
    selectQueryParam,
    selectRouteParams,
    selectRouteParam,
    selectRouteData,
    selectUrl,
} = getSelectors(selectRouterState);

export const selectQueryParamsAll = selectQueryParams;
