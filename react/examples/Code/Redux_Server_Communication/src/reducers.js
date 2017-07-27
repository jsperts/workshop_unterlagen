import {
  GOT_DATA,
  ADDED_DATA,
  DELETED_DATA,
  REQUEST_SENT,
  GOT_RESPONSE,
} from './events';
import initialState from './initialState';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_DATA:
      return {
        data: action.payload,
      };

    case ADDED_DATA:
      return {
        data: [...state.data, action.payload],
      };

    case DELETED_DATA:
      return {
        data: state.data.filter((d) => d.id !== action.payload),
      };

    case REQUEST_SENT:
      console.log('Start Spinner');
      return state;

    case GOT_RESPONSE:
      console.log('Stop Spinner');
      return state;

    default:
      return state;
  }
}

export default rootReducer;
