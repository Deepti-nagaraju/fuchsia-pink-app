import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { WishlistService } from '../../../shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  constructor(
    public wishlistService: WishlistService,
    public cartService: CartService
  ) {}
}
