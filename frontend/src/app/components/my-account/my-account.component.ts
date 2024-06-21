import { Component, inject } from '@angular/core';
import { LoginService } from "../../services/login.service";

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
        if (response.resultado === 'bien') {
          //this.name = response.data.name;
          //this.toastrService.success(`Hello, ${this.name}!`);
        } else {
          //this.loginService.logout();
        }
      });
    } else {
      //this.loginService.logout();
    }
  }
}
