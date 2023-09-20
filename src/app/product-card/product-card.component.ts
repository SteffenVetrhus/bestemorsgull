import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../state/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any;
  constructor(private store: Store<{ cart: any[] }>) {}

  addToCart(item: any) {
    this.store.dispatch(CartActions.addItem({ item }));
  }
}
