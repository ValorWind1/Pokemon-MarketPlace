import { Injectable, Input } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  // @Input() Isshiny: boolean;

  // private BaseEndpoint = 'http://localhost:8080/api/';

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  // constructor(private http: HttpClient) { }

  // endpoint() {
  //   if (this.Isshiny){
  //     return this.BaseEndpoint + 'shiny';
  //   }
  // }



  // heroUpdatedSubject: Subject<Hero> = new Subject<Hero>();

  // subscribeToHeroUpdates(): Subject<Hero> {
  //   return this.heroUpdatedSubject;
  // }

  // getHeroes(): Observable<Hero[]> {

  //   return (this.http.get<Hero[]>(this.endpoint));
  // }

  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.endpoint}/${id}`;
  //   return this.http.get<Hero>(url);
  // }

  // addHero(hero: Hero): Observable<Hero> {
  //   console.log('inside add method');
  //   return this.http.post<any>(this.endpoint, JSON.stringify(hero), this.httpOptions);
  // }

  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.endpoint, JSON.stringify(hero), this.httpOptions);

  // }

  // deleteHero(hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.endpoint}/${id}`;

  //   return this.http.delete<Hero>(url, this.httpOptions);
  // }

  // heroUpdated(hero: Hero) {
  //   this.heroUpdatedSubject.next(hero);
  // }

}

