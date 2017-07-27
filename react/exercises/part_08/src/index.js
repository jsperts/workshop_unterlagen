import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import AppContainer from './containers/App';
import { getContacts } from './actions';

import store from './store'

store.dispatch(getContacts());

const root = (<Provider store={store}>
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
</Provider>);

ReactDOM.render(root, document.getElementById('root'));
