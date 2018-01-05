import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import AppContainer from './containers/App';

import store from './store';

const root = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
