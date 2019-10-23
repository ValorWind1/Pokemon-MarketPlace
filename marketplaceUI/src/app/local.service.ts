import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  public data = [];


  saveInLocal(key, val): void {

    this.storage.set(key, val);
    // updates data[] to match the saved state
    this.data[key] = this.storage.get(key);

   }

   getFromLocal(key) {

     this.data[key] = this.storage.get(key);
   }

}
