import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware),
);

export default store;
