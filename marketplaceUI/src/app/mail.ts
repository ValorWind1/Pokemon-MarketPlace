import { Pokemon } from './Pokemon';
import { Items } from './Items';

export class Mail {

  emailAddress: string;
	poke: Pokemon[] ;
  item: Items[] ;

  constructor(email: string, pokemon: Pokemon[], items: Items[]) {

    this.emailAddress = email;
    this.poke = pokemon;
    this.item = items;

  }
}
