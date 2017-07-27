import React from 'react';
import PropTypes from 'prop-types';

import ListElement from './ListElement';

function List(props) {
  return (<ul className="list-group">
    {
      props.list.map((elem) => <ListElement key={elem.id} {...elem} />)
    }
  </ul>);
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
