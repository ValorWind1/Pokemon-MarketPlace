import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ApiConsumerService } from '../api-consumer.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart = [];
  items = [];
  total = 0;
  email;
  // this.total

  constructor(private service: CartService, private emailservice: ApiConsumerService) {}

  sendMail() {
    this.emailservice.sendEmail(this.email).subscribe(poke => {console.log(poke) } );

  }

  getCart() {

    this.cart = this.service.Cart;
    this.items = this.service.ItemCart;
    console.log(this.cart);
  }

  removeAll() {
    this.service.deleteAll();
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
