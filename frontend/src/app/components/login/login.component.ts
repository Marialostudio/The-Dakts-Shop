import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Credential } from "../../interfaces/credential";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  //router = inject(Router);
  //loginService: LoginService = inject(LoginService);

  credentialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.credentialsForm.valid) {
      const username = this.credentialsForm.value.username;
      const password = this.credentialsForm.value.password;

      if (typeof username === 'string' && typeof password === 'string') {
        const credential: Credential = {
          username,
          password,
        };
        this.loginService.login(credential).subscribe((response: any) => {
          //console.log('response: ', response);
          //const decoded = jwtHelperService.decodeToken(response.datos);
          //console.log('decoded: ', decoded);
          //localStorage.setItem('token', response.datos);
          //this.router.navigateByUrl('/shop');
        });
      }
    } else {
      console.log('Error: invalid form');
    }
  }

}
