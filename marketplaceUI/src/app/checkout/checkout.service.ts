import { Injectable } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { Items } from '../Items';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  Cart: any[] = [];
  ItemCart: Items[] = [];


  add(poke: Pokemon) {
    this.Cart.push(poke);
  }

  addItem(item: Items) {
    this.ItemCart.push(item);
  }

  remove(item: any) {
    for( let i = 0; i < this.Cart.length; i++){
     if ( this.Cart[i] === item) {
       this.Cart.splice(i, 1);
      }
    }
  }

  removeItem(item: any) {
    for( let i = 0; i < this.ItemCart.length; i++){
     if ( this.ItemCart[i] === item) {
       this.ItemCart.splice(i, 1);
      }
    }
  }
}


