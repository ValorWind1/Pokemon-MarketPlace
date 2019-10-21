import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Items } from '../Items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[];
  items: Items[];

  constructor(private service: CartService) {}

  getCart() {
    this.cart = this.service.Cart;
    this.items = this.service.ItemCart;
    console.log(this.cart);
    console.log(this.items);
  }

  remove(item: any) {
    this.service.remove(item);
    this.service.removeItem(item);
    this.getCart();
   }

   ngOnInit() {
    this.getCart();
  }

}
