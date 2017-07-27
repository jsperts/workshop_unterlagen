export const products = [
  {id: 1, name: 'Prod 1'},
  {id: 2, name: 'Prod 2'},
  {id: 3, name: 'Prod 3'},
  {id: 4, name: 'Prod 4'},
];

export function getProduct(id) {
  return products.filter((prod) => prod.id === id)[0];
}
