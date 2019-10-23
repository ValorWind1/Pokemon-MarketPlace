import { Component, OnInit } from '@angular/core';
import { Items } from '../Items';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart = [];
  items = [];
  total = 0;
  // this.total

  constructor(private service: CartService) {}

  getCart() {

    this.cart = this.service.Cart;
    this.items = this.service.ItemCart;
    console.log(this.cart);
  }

  remove(item: any) {
    this.service.remove(item);
    this.service.removeItem(item);
    this.getCart();
   }

  getTotal() {
    for (const poke of this.service.Cart) {
      this.total += poke.price;
    }

    for (const item of this.service.ItemCart
      ) {
      this.total += item.price;
    }
  }

  ngOnInit() {
    this.getTotal();
    this.getCart();
  }

}
