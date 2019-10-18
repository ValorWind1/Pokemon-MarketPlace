import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { PokeListComponent } from '../poke-list/poke-list.component';

@Component({
  selector: 'app-shiny-list',
  templateUrl: './shiny-list.component.html',
  styleUrls: ['./shiny-list.component.css']
})
export class ShinyListComponent extends PokeListComponent implements OnInit {

  pokemon: Pokemon[];
  name = '';

  getShinyPokemon(): void {
    this.service.getShinyPokemon()
    .subscribe(poke => {this.pokemon = poke; this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum); this.setPrice();
    });
  }

  ngOnInit() {
    this.getShinyPokemon();
  }

  getInput(n: string) {
   n = n[0].toUpperCase() + n.substr(1).toLowerCase();
   this.name = n;
  }
  setPrice() {
    for ( const i of this.pokemon) {
      if (i.type[0] === 'Dragon' || i.type[1] === 'Dragon') {
        i.price = i.total * 150;
      } else {
        i.price = i.total * 100;
      }
    }

  }

}
