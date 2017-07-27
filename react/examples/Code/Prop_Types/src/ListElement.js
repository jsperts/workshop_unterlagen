import React from 'react';
import PropTypes from 'prop-types';

function ListElement(props) {
  return (<li className="list-group-item" id={props.id}>
    {props.title}
  </li>);
}

ListElement.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListElement;
