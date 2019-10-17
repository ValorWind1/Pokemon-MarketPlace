import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';
import { HttpClient } from "@angular/common/http";
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
    .subscribe(poke => {this.pokemon = poke; this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum); });


  }

  log() {

    this.pokemon.sort((a, b) => a.nationalNum - b.nationalNum);
  }

  ngOnInit() {
    this.getPokemon();
  }

}
