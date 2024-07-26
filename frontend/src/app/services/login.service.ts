import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Credential } from "../interfaces/credential";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  httpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  router = inject(Router);

  API_URL = 'http://3.22.194.43:3000/login';

  login(credential: Credential){
    return this.httpClient.post(this.API_URL, credential);
  }

  verifyToken(token: String){
    return this.httpClient.get(`${this.API_URL}/${token} `);
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.toastrService.info('Bye!');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
