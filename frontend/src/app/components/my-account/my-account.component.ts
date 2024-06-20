import { Component, inject } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginService } from "../../services/login.service";

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {
  loginService = inject(LoginService);
  ngOnInit(){
    const token: any = localStorage.getItem("token: ");
    console.log("token: ", token);
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any)=>{
        console.log('response: ', response)
      })
    } else {
      
    }
  }
}
