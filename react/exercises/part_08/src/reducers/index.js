import { combineReducers } from 'redux';

import contactsReducer from './contacts';
import appReducer from './app';
import formsReducer from './forms';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  appState: appReducer,
  forms: formsReducer,
});

export default rootReducer;
