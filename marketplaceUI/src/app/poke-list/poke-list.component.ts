import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';

import { Pokemon } from '../Pokemon';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemon: Pokemon[];
  lengendaries = [144, 145, 146, 150, 151, 243, 244, 245, 249,
    250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386,
    480, 481, 482, 483, 484, 485, 486, 487, 488, 490, 491, 492,
    494, 638, 639, 640, 641, 642, 643, 644, 649];

  beginning = 0;
  end = 152;
  name;

  constructor(protected service: ApiConsumerService, protected cartService: CartService) { }

  addToCart(poke: Pokemon) {
    this.cartService.add(poke);
  }

  // sets delay for the added to cart alert
  async delay(ms: number, poke: Pokemon) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => poke.hideAlert = false);
}

  getPokemon(): void {

    this.service.getPokemon()
    .subscribe(poke => {this.pokemon = poke; this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum); this.setPrice(); });
  }

  getInput(n: string) {
    if (n.length > 0) {
      n = n[0].toUpperCase() + n.substr(1).toLowerCase();
      this.name = n;
    }
  }

  isLegendary(dex: number) {

    for (let i = 0; i <= this.lengendaries.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (dex == this.lengendaries[i]) {
              return true;
      }

    }

    return false;
  }

  setPrice() {
    for (const i of this.pokemon) {

      if (i.name === 'Arceus') {
        i.price = i.total * 3000;
      } else if (this.isLegendary(i.nationalNum)) {
        i.price = i.total * 70;
      } else if (i.type[0] === 'Dragon' || i.type[1] === 'Dragon') {
        i.price = i.total * 50;
      } else {
        i.price = i.total * 30;
      }

    }

  }

  // sets the path to the type image
  concat(s: string) {

    s = '../../assets/' + s + '.png';
    return s;
  }

  // sets the range of pokemon that will be shown
  pick(b: number, e: number) {
    this.beginning = b;
    this.end = e;
  }

  ngOnInit() {
    this.getPokemon();

  }

  // filter function
  check(poke) {
    if (this.name === '') {return false; }
    return poke.name.startsWith(this.name);
  }

}
