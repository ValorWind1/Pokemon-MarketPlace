import { Component, OnInit } from '@angular/core';
import { Items } from '../Items';
import {ItemServiceService} from './item-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-poke-items',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.css']
})
export class PokeItemsComponent implements OnInit {
  name;
  items: Items[];
  active = false;

  constructor(private service: ItemServiceService, protected cartService: CartService) { }

  getItem(): void {
    this.service.getItem()
    .subscribe(item => {this.items = item; this.setRealID();});
  }

  getInput(n: string) {
    n = n[0].toUpperCase() + n.substr(1).toLowerCase();
    this.name = n;
    this.active = true;
    if (n.length === 0) {
      this.active = false;
    }

  }

  setRealID() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].realId = i + 1;
    }
  }

 // sets delay for the added to cart alert
  async delay(ms: number, item: Items) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => item.hideAlert = false);
  }

  addToCart(item: Items) {
    this.cartService.addItem(item);
  }

  ngOnInit() {
    this.getItem();
  }



}
