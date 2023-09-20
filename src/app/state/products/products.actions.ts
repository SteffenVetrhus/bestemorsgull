import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: any }>()
);

export const removeProduct = createAction(
  '[Products] Remove Product',
  props<{ id: string }>()
);
