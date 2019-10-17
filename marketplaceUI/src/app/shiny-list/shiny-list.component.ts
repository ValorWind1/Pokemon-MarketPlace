import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-shiny-list',
  templateUrl: './shiny-list.component.html',
  styleUrls: ['./shiny-list.component.css']
})
export class ShinyListComponent implements OnInit {

  pokemon: Pokemon[];

  constructor(private service: ApiConsumerService) { }

  getShinyPokemon(): void {
    this.service.getShinyPokemon()
    .subscribe(poke => {this.pokemon = poke; this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum); });
  }

  ngOnInit() {
    this.getShinyPokemon();
  }

  filter() {

  }

}
