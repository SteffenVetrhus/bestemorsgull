import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export const initialState: any[] = [];

const _cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => [...state, item]),
  on(CartActions.removeItem, (state, { id }) => state.filter(item => item.id !== id))
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}