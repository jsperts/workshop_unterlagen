import update from 'immutability-helper';

import {
  FORM_SUBMITTED
} from './events';
import initialState from './initialState';

function rootReducer(state = initialState, {type, payload}) {
  switch (type) {

    case FORM_SUBMITTED:
      return update(state, { form: { $set: initialState.form }, submittedForm: { $set: payload } });

    default:
      return state;
  }
}

export default rootReducer;
