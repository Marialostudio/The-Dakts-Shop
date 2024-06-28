import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  httpClient = inject(HttpClient);

  API_URL = 'http://localhost:3000/products';

  getProducts(){
    return this.httpClient.get(this.API_URL);
  }

}
