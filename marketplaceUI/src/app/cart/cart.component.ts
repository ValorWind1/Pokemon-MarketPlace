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
  total = 0;

  constructor(private service: CartService) {}

  getCart() {
    this.cart = this.service.Cart;
    this.items = this.service.ItemCart;
  }

  remove(item: any) {
    this.service.remove(item);
    this.service.removeItem(item);
    this.getCart();
    this.getTotal();
   }

  getTotal() {
    this.total = 0;
    for (const poke of this.cart) {
      this.total += poke.price;
    }

    for (const item of this.items) {
      this.total += item.price;
    }
  }
  deleteAll() {
    this.service.deleteAll();
    this.getCart();
    this.getTotal();
  }

   ngOnInit() {
    this.getCart();
    this.getTotal();
  }

}
