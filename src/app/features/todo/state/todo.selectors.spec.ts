import { selectTodoState } from './todo.selectors';
import {todoFeatureKey} from './todo.reducer';

describe('Todo Selectors', () => {
    it('should select the feature state', () => {
        const result = selectTodoState({
            [todoFeatureKey]: {},
        });
        console.log(result);
        expect(result).toEqual({} as any);
    });
});
