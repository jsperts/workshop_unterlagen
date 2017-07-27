import React from 'react';

import ListElement from './ListElement';

function List(props) {
  return (<ul className="list-group">
    {
      props.list.map((elem) => <ListElement key={elem.id} id={elem.id} title={elem.title} cb={props.cb} />)
    }
  </ul>);
}

export default List;
