import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);

  firstName: string = '';
  
  ngOnInit(){
    const token: any = localStorage.getItem('token');
    //console.log("token: ", token);
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any)=>{
        if (response.result === 'Good!') {
          console.log(response);
          this.firstName = response.data.firstName;
          this.toastrService.success(`Hello, ${this.firstName}!`);
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }
}
