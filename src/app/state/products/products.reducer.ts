import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';

export const initialState: any[] = [
  {
    name: 'Høstteppe',
    description: 'Et varmt og koselig teppe i høstfarger.',
    price: 500,
    number: 2,
    id: 1,
  },
  {
    name: 'Vinterteppe',
    description: 'Et tykt teppe perfekt for kalde dager.',
    price: 600,
    number: 2,
    id: 2,
  },
  {
    name: 'Vårteppe',
    description: 'Et lett teppe i friske farger.',
    price: 400,
    number: 2,
    id: 3,
  },
  {
    name: 'Sommerblomst',
    description: 'Et sommerlig teppe med blomstermønster.',
    price: 450,
    number: 2,
    id: 4,
  },
  {
    name: 'Sommerblomst',
    description: 'Et sommerlig teppe med blomstermønster.',
    price: 450,
    number: 2,
    id: 5,
  },
  {
    name: 'Sommerblomst',
    description: 'Et sommerlig teppe med blomstermønster.',
    price: 450,
    number: 2,
    id: 6,
  },
];

const _productsReducer = createReducer(
  initialState,
  on(ProductsActions.addProduct, (state, { product }) => [...state, product]),
  on(ProductsActions.removeProduct, (state, { id }) =>
    state.filter((product) => product.id !== id)
  )
);

export function productsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}
