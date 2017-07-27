import React from 'react';

import List from './List';

function callBack(data) {
  console.log('Called:', data);
}

function App(props) {
  return <List list={props.list} cb={callBack} />;
}

export default App;
