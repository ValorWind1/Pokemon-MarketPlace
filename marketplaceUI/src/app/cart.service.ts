import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  Cart: Pokemon[] = [];


  add(poke: Pokemon) {
    this.Cart.push(poke);

  }

  remove(item: any) {
    for( let i = 0; i < this.Cart.length; i++){
     if ( this.Cart[i] === item) {
       this.Cart.splice(i, 1);
      }
    }
  }
}
