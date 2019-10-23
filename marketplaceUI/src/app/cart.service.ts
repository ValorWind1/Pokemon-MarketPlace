import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { Items } from './Items';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Cart: any[] = [];
  ItemCart: Items[] = [];
  cartSize: number;

  constructor(private service: LocalService) {
    this.service.getFromLocal(1);
    this.service.getFromLocal(2);
    const data = this.service.data;

    // if there is any saved data, the cart will be updated accordingly
    if (data[1]) {
      this.Cart = data[1];
    }

    if (data[2]) {
      this.ItemCart = data[2];
    }

  }

  add(poke: Pokemon) {
    this.Cart.push(poke);
    this.setCartSize();
  }

  addItem(item: Items) {
    this.ItemCart.push(item);
    this.setCartSize();
  }

  setCartSize() {
    this.cartSize = this.Cart.length + this.ItemCart.length;
    // saves current cart to local machine
    this.service.saveInLocal(1, this.Cart);
    this.service.saveInLocal(2, this.ItemCart);
  }

  remove(item: any) {
    for ( let i = 0; i < this.Cart.length; i++) {
     if ( this.Cart[i] === item) {
       this.Cart.splice(i, 1);
      }
    }
    this.setCartSize();
  }

  removeItem(item: any) {
    for ( let i = 0; i < this.ItemCart.length; i++) {
     if ( this.ItemCart[i] === item) {
       this.ItemCart.splice(i, 1);
      }
    }
    this.setCartSize();
  }

  deleteAll() {
    this.Cart.length = 0;
    this.ItemCart.length = 0;
    this.setCartSize();
  }
}
