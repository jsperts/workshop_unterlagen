import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

function App(props) {
  return <List list={props.list} />;
}

App.propTypes = {
  list: PropTypes.array(),
};

export default App;
