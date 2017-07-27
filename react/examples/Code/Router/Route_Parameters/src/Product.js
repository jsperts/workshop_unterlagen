import React from 'react';

import { getProduct } from './data';

function Product({ match }) {
  const prod = getProduct(Number(match.params.id));

  return <h1>{prod.name}</h1>
}

export default Product;
