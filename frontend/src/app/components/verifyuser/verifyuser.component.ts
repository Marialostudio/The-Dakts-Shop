import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from "@angular/router";
import { CreateaccountService } from "../../services/createaccount.service";

@Component({
  selector: 'app-verifyuser',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './verifyuser.component.html',
  styleUrl: './verifyuser.component.css'
})
export class VerifyuserComponent {
  toastrService = inject(ToastrService);
  createaccountService = inject(CreateaccountService);

  /* firstName: string = '';
  
    ngOnInit(){
    const newuser: any = this.createaccountService.accountCreated;
    console.log(newuser); 
    if (newuser) {
      this.createaccountService.accountCreated(newuser).subscribe((response: any)=>{
        if (response.result === 'Good!') {
          console.log(response);
          this.firstName = response.data.firstName;
          this.toastrService.success(`Well done, ${this.firstName}!`);
        }
      })
    } else {
      this.toastrService.success('Sorry try again');
    }


    } */

}
