import update from 'immutability-helper';

import initialState from '../initialState';
import { FIELD_UPDATED, INIT_FORM } from '../events';

function formsReducer(formsState = initialState.forms, action) {
  const { type, payload } = action;

  switch(type) {
    case INIT_FORM: return update(formsState, {
      [payload.formName]: { data: { $set: payload.data } }
    });

    case FIELD_UPDATED: return update(formsState, {
      [payload.formName]: { data: { [payload.fieldName]: { $set: payload.value } } }
    });
    default: return formsState;
  }
}

export default formsReducer;
