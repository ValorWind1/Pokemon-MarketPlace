import { Pokemon } from './Pokemon';
import { Items } from './Items';

export class Mail {

  emailAddress: string;
	poke: Pokemon[] ;
  item: Items[] ;
  total: number;

  constructor(email: string, pokemon: Pokemon[], items: Items[], total: number) {

    this.emailAddress = email;
    this.poke = pokemon;
    this.item = items;
    this.total = total;

  }
}
