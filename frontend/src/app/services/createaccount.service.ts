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

  API_URL = 'http://3.22.194.43:3000/users';

  createAccount(newaccount: Newaccount){
    console.log(newaccount);
    return this.httpClient.post(this.API_URL, newaccount);
  }

 /*accountCreated() {
  const newUser = new ;
  console.log(newUser);
     if (newUser) {
      return true;
    } else {
      return false;
    } 
  }  */

  /* logout() {
    this.toastrService.info('Bye!');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  } */
}
