import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[];

  constructor(private service: CartService) {}

  getCart() {
    this.cart = this.service.Cart;
    console.log(this.cart);
  }

  remove(item: any) {
    this.service.remove(item);
    this.getCart();
   }

   ngOnInit() {
    this.getCart();
  }

}
