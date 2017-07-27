 import { COUNTER_INCREMENTED } from './events';
import initialState from './initialState';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export default rootReducer;
