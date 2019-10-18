import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';

import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemon: Pokemon[];
  beginning = 0;
  end = 650;

  constructor(protected service: ApiConsumerService) { }

  getPokemon(): void {

    this.service.getPokemon()
    .subscribe(poke => {this.pokemon = poke; this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum); this.setPrice(); });


  }

  setPrice() {
    for ( let i of this.pokemon) {
      if (i.type[0] === 'Dragon' || i.type[1] === 'Dragon') {
        i.price = i.total * 50;
      } else {
        i.price = i.total * 30;
      }
    }

  }

  concat(s: string){

    s = '../../assets/' + s + '.png';
    return s;
  }

  pick(b: number, e: number) {
    this.beginning = b;
    this.end = e;
    console.log(this.beginning)
  }

  ngOnInit() {
    this.getPokemon();
  }

}
