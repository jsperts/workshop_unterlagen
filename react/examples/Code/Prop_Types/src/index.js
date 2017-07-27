import React from 'react';
import { render } from 'react-dom';
import App from './App';

const list = [
  { id: 1, title: 'Element 1' },
  { id: 2, title: 'Element 2' },
  { id: '3', title: 'Element 3' },
  { id: 4 },
];

render(<App list={list} />, document.getElementById('root'));
