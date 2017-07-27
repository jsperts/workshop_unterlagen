import React from 'react';
import { Link } from 'react-router-dom';

import { products } from './data';

function Products() {
  return (<ul className="list-group">
    { products.map((prod) => <li
      className="list-group-item"
      key={prod.id}>
        <Link to={'/prod/' + prod.id}>
          {prod.name}
        </Link>
    </li>)}
  </ul>);
}

export default Products;
