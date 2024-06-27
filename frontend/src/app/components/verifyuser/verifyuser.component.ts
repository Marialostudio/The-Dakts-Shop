import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateaccountService } from "../../services/createaccount.service";

@Component({
  selector: 'app-verifyuser',
  standalone: true,
  imports: [],
  templateUrl: './verifyuser.component.html',
  styleUrl: './verifyuser.component.css'
})
export class VerifyuserComponent {
  toastrService = inject(ToastrService);
  createaccountService = inject(CreateaccountService);

  /*firstName: string = '';
  
    ngOnInit(){
    const newuser: any = this.createaccountService;
    console.log(newuser); */
    /* if (newuser) {
      this.createaccountService.createAccount(newuser).subscribe((response: any)=>{
        if (response.result === 'Good!') {
          console.log(response);
          this.firstName = response.data.firstName;
          this.toastrService.success(`Well done, ${this.firstName}!`);
        }
      })
    } else {
      this.toastrService.success('Sorry try again');
    } */


    /* const token: any = localStorage.getItem('token');
    //console.log("token: ", token);
    if (token) {
      this.createaccountService.createAccount(token).subscribe((response: any)=>{
        if (response.result === 'Good!') {
          console.log(response);
          this.firstName = response.data.firstName;
          this.toastrService.success(`Well done, ${this.firstName}!`);
        } else {
          this.toastrService.success(`Sorry ${this.firstName}, try again`);
          //this.createaccountService.logout();
        }
      });
    } else {
      this.createaccountService.logout();
    } 

    }*/

}
