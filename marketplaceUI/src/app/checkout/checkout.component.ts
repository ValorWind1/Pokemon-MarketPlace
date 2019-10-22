import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { Items } from '../Items';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: any[];
  items: Items[];
  total = 0;
  // this.total

  constructor(private service: CheckoutService) {}

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

  getTotal() {
    for (const poke of this.cart) {
      this.total += poke.price;
    }

    for (const item of this.items) {
      this.total += item.price;
    }
  }

  ngOnInit() {
    this.getTotal();
    this.getCart();
  }

}
