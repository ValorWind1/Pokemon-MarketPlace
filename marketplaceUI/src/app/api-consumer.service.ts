import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  @Input() IsShiny: boolean;

  private endpoint = 'http://localhost:8080/api/pokemon';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

    if (this.IsShiny) {
      this.endpoint = 'http://localhost:8080/api/shiny';
    }

  }



  getPokemon(): Observable<Pokemon[]> {
      console.log(this.http.get<Pokemon[]>(this.endpoint));
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

}

