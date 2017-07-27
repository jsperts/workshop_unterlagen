import initialState from '../initialState';
import { ADD_CONTACT_SHOWN, ADD_CONTACT_HIDDEN } from '../events';

function appReducer(appState = initialState.appState, action) {
  const { type } = action;

  switch(type) {
    case ADD_CONTACT_SHOWN: return { showAddContact: true };
    case ADD_CONTACT_HIDDEN: return { showAddContact: false };
    default: return appState;
  }
}

export default appReducer;
