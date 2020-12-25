import { ActionReducer, INIT, MetaReducer } from '@ngrx/store';

export function storageMetaReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return (state, action) => {
        const nextState = reducer(state, action);

        if ([INIT.toString()].includes(action.type)) {
        }
        return { ...state, ...nextState };
    };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
