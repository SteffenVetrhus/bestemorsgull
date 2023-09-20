import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const appRoutes: Route[] = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ShopComponent,
    path: 'shop',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: CartComponent,
    path: 'cart',
  },
  {
    component: CheckoutComponent,
    path: 'checkout',
  },
];
