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

  constructor(private service: ApiConsumerService) { }

  getPokemon(): void {
    this.service.getPokemon()
    .subscribe(poke => this.pokemon = poke);
    console.log(this.pokemon);
  }

  ngOnInit() {
    this.getPokemon();
  }

}
