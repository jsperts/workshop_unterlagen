import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import initialState from './initialState';

ReactDOM.render(<App {...initialState} />, document.getElementById('root'));
