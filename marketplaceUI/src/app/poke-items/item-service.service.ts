import { Injectable , Input } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../Items';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private endpoint = 'http://localhost:8080/api/item';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

// get
getItem(): Observable<Items[]> {
  console.log(this.http.get<Items[]>(this.endpoint));
  return (this.http.get<Items[]>(this.endpoint));
}
// update(put)
updateItem(item: Items): Observable<any> {
  return this.http.put(this.endpoint, JSON.stringify(item), this.httpOptions);

}
// delete
deleteItem(id: number): Observable<{}> {
  const url = `${this.endpoint}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url, this.httpOptions);
}

// post
addItem(item: Items): Observable<any> {
  return this.http.post(this.endpoint, JSON.stringify(item), this.httpOptions);

    }


}
