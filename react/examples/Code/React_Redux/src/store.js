import { createStore } from 'redux';

import rootReducer from './reducers';
import initialState from './initialState';

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
