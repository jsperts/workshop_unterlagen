import { combineReducers } from 'redux';

import contactsReducer from './contacts';
import appReducer from './app';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  appState: appReducer,
});

export default rootReducer;
