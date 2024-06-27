import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Newaccount } from "../../interfaces/newaccount";
import { CreateaccountService } from "../../services/createaccount.service";


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  router = inject(Router);
  toastrService = inject(ToastrService);
  createaccountService: CreateaccountService = inject(CreateaccountService);

  newaccountForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    subscribe: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.newaccountForm.valid) {
      const firstName = this.newaccountForm.value.firstName;
      const lastName = this.newaccountForm.value.lastName;
      const emailAddress = this.newaccountForm.value.emailAddress;
      const password = this.newaccountForm.value.password;
      const subscribe = this.newaccountForm.value.subscribe;

      if (typeof firstName === 'string' && typeof lastName === 'string' && typeof emailAddress === 'string' && typeof password === 'string' && typeof subscribe === 'boolean') {
        const newaccount: Newaccount = {
          firstName,
          lastName,
          emailAddress,
          password,
          subscribe,
        };
        this.createaccountService.createAccount(newaccount).subscribe((response: any) => {
          console.log('response: ', response);
          if (response.result === "Good!") {
            //localStorage.setItem('token', response.data);
            this.router.navigateByUrl('/verifyuser');
          } else {
            this.toastrService.warning('Check the data');
          } 
        });
      }
    } else {
      this.toastrService.warning('All fields are required');
    }
  }

}
