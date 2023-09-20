import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCartState = createFeatureSelector<any[]>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: any[]) => state
);

export const selectCartItemCount = createSelector(
    selectCartItems,
    (items: any[]) => items.length
  );