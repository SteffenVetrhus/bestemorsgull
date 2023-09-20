import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CartActions from '../../state/cart/cart.actions';
import { selectCartItems } from 'src/app/state/cart/cart.selector';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$ = this.store.pipe(select(selectCartItems));
  constructor(
    private readonly router: Router,
    private store: Store<{ cart: any[] }>
  ) {}
  addToCart(item: any) {
    this.store.dispatch(CartActions.addItem({ item }));
  }

  removeFromCart(id: number) {
    this.store.dispatch(CartActions.removeItem({ id }));
  }

  removeItem(index: number) {
    // Dispatch the remove item action with the index of the item to remove
    this.store.dispatch(CartActions.removeItem({ id: index }));
  }

  goToCheckout() {
    // Implement your logic to navigate to the checkout page
    // This can be done using Angular Router or your preferred navigation method
    console.log('Navigating to Checkout...');
    this.router.navigate(['/checkout'])
  }

  getTotalPrice() {
    // Implement your logic to calculate the total price
    // You can do this by summing the prices of all items in the cart
    // Here, I'm assuming you have a selector or method for calculating the total price
    // Replace with your actual logic
    return this.cartItems$.pipe(
      map((items) => items.reduce((total, item) => total + item.price, 0))
    );
  }
}
