import { selectRouterState } from './router.selector';
import { routerFeatureKey } from './router.reducer';

xdescribe('Router Selectors', () => {
    it('', () => {
        const result: any = selectRouterState({
            [routerFeatureKey]: { navigationId: 0, state: {} },
        });

        expect(
            result.toEqual({
                navigationId: 0,
                state: {},
            })
        );
    });
});
