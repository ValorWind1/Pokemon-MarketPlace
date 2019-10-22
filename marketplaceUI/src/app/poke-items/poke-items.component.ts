import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';
import { Items } from '../Items';
import {ItemServiceService} from './item-service.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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
    .subscribe(item => {this.items = item; });
  }

  getInput(n: string) {
    this.name = n;
    this.active = true;
    if (n.length === 0) {
      this.active = false;
    }
  }

  async delay(ms: number, poke: Items) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => poke.hideAlert = false);
  }

  addToCart(item: Items) {
    this.cartService.addItem(item);
  }

  back() {
  this.active = false;
  }
  ngOnInit() {
    this.getItem();
  }



}
