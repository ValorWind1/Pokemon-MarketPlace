import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Pokemon;

  pokemon: Pokemon[];

  constructor() { }

  ngOnInit() {
  }

}
