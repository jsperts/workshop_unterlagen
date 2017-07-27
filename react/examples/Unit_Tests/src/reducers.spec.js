import reducers from './reducers';
import { COUNTER_INCREMENTED } from './events';

describe('reducers', () => {
  test('Should increment the counter by one', () => {
    const state = { count: 10 };
    const action = { type: COUNTER_INCREMENTED };

    const newState = reducers(state, action);

    expect(newState.count).toEqual(state.count + 1);
  });
});
