import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectProductsState = createFeatureSelector<any[]>('products');

export const selectProducts = createSelector(
  selectProductsState,
  (state: any[]) => state
);