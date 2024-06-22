import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Credential } from "../../interfaces/credential";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  router = inject(Router);
  toastrService = inject(ToastrService);
  loginService: LoginService = inject(LoginService);

  credentialsForm = new FormGroup({
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.credentialsForm.valid) {
      const emailAddress = this.credentialsForm.value.emailAddress;
      const password = this.credentialsForm.value.password;

      if (typeof emailAddress === 'string' && typeof password === 'string') {
        const credential: Credential = {
          emailAddress,
          password,
        };
        this.loginService.login(credential).subscribe((response: any) => {
          //console.log('response: ', response);
          if (response.result === "Good!") {
            localStorage.setItem('token', response.data);
            this.router.navigateByUrl('/my-account');
          } else {
            this.toastrService.warning('Invalid credentials');
          }
        });
      }
    } else {
      this.toastrService.warning('All fields are required');
    }
  }

}
