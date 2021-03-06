import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';
import { Mail } from './mail';


@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private endpoint = 'http://localhost:8080/api/pokemon';
  private shinyEndpoint = 'http://localhost:8080/api/shiny';
  private emailEndpoint = 'http://localhost:8080/api/sm';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  sendEmail(email: Mail) {

    return this.http.post(this.emailEndpoint, JSON.stringify(email), this.httpOptions);

  }

  //Pokemon CRUD
  getPokemon(): Observable<Pokemon[]> {

      return (this.http.get<Pokemon[]>(this.endpoint));
  }

  get1Pokemon(id: number): Observable<Pokemon> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  addPokemon(poke: Pokemon): Observable<Pokemon> {

    return this.http.post<any>(this.endpoint, JSON.stringify(poke), this.httpOptions);
  }

  updatePokemon(poke: Pokemon): Observable<any> {
    return this.http.put(this.endpoint, JSON.stringify(poke), this.httpOptions);

  }

  deletePokemon(poke: Pokemon | number): Observable<Pokemon> {
    const id = typeof poke === 'number' ? poke : poke.id;
    const url = `${this.endpoint}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions);
  }

  // Shiny Pokemons CRUD
  getShinyPokemon(): Observable<Pokemon[]> {
    return (this.http.get<Pokemon[]>(this.shinyEndpoint));
  }

  get1ShinyPokemon(id: number): Observable<Pokemon> {
    const url = `${this.shinyEndpoint}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  addShinyPokemon(poke: Pokemon): Observable<Pokemon> {

    return this.http.post<any>(this.shinyEndpoint, JSON.stringify(poke), this.httpOptions);
  }

  updateShinyPokemon(poke: Pokemon): Observable<any> {
    return this.http.put(this.shinyEndpoint, JSON.stringify(poke), this.httpOptions);

  }

  deleteShinyPokemon(poke: Pokemon | number): Observable<Pokemon> {
    const id = typeof poke === 'number' ? poke : poke.id;
    const url = `${this.shinyEndpoint}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions);
  }


}

