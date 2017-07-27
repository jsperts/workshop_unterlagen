import React from 'react';

function ListElement(props) {
  function cb() {
    props.cb(props.title);
  }

  return (<li className="list-group-item" id={props.id}>
    {props.title}&nbsp;
    <button onClick={cb}>Click me!</button>
  </li>);
}

export default ListElement;
