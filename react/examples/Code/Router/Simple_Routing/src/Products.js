import React from 'react';

const products = [
  {id: 1, name: 'Prod 1'},
  {id: 2, name: 'Prod 2'},
  {id: 3, name: 'Prod 3'},
  {id: 4, name: 'Prod 4'},
];

function Products() {
  return (<ul className="list-group">
    { products.map((prod) => <li className="list-group-item" key={prod.id}>{prod.name}</li>)}
  </ul>);
}

export default Products;
