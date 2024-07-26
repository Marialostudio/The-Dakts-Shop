import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  httpClient = inject(HttpClient);

  API_URL = 'http://3.22.194.43:3000/products';

  getProducts(){
    return this.httpClient.get(this.API_URL);
  }

}
