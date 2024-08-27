import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Newaccount } from "../interfaces/newaccount";

@Injectable({
  providedIn: 'root'
})
export class CreateaccountService {

  constructor() { }

  httpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  router = inject(Router);

  API_URL = 'http://localhost:3000/users';

  createAccount(newaccount: Newaccount){
    return this.httpClient.post(this.API_URL, newaccount);
  }

/*  accountCreated() {
  const newUser = this.createAccount ;
  console.log(newUser);
  }  */

}
