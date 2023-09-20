import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartItemCount } from './state/cart/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cartCount$ = this.store.select(selectCartItemCount);
  isMobileMenuOpen = false;
  constructor(private readonly route: Router, private readonly store: Store) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  goToCart() {
    this.route.navigate(['/cart']);
  }
  title = 'bg';
}
