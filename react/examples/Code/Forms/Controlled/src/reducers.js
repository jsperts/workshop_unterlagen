import update from 'immutability-helper';

import {
  VALUE_CHANGED,
  FORM_SUBMITTED
} from './events';
import initialState from './initialState';

function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case VALUE_CHANGED:
      return update(state, { form: { $merge: { [payload.name]: payload.value } } });

    case FORM_SUBMITTED:
      return update(state, { form: { $set: initialState.form }, submittedForm: { $set: state.form } });

    default:
      return state;
  }
}

export default rootReducer;
