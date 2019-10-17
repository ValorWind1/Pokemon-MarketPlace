import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';
import { Items } from '../Items';
import {ItemServiceService} from './item-service.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-poke-items',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.css']
})
export class PokeItemsComponent implements OnInit {

  items: Items[];
  constructor(private service: ItemServiceService) { }

  getItem(): void {

    this.service.getItem()
    .subscribe(poke => {this.items = poke; });
  }

  getRealId(){
   for (let i = 0; i >= ItemServiceService.length; i++) {

   }

  }
  ngOnInit() {
    this.getItem();
    this.getRealId();
  }



}
