export class Pokemon {
  id: number;
  nationalNum: number;
  name: string;
  type: string[];
  sprite ;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;

  // members for price and cart confirmation
  price: number;
  hideAlert = false;
}
