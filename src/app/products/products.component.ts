import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../state/products/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$ = this.store.select(selectProducts);
  constructor(private readonly store: Store){}
}
