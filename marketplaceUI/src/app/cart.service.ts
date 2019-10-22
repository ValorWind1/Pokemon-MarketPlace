import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { Items } from './Items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  Cart: any[] = [];
  ItemCart: Items[] = [];
  cartSize = 0;


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
    console.log(this.cartSize);
  }

  remove(item: any) {
    for( let i = 0; i < this.Cart.length; i++){
     if ( this.Cart[i] === item) {
       this.Cart.splice(i, 1);
      }
    }
    this.setCartSize();
  }

  removeItem(item: any) {
    for( let i = 0; i < this.ItemCart.length; i++){
     if ( this.ItemCart[i] === item) {
       this.ItemCart.splice(i, 1);
      }
    }
    this.setCartSize();
  }
}
