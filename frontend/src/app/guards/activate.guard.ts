import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { LoginService } from "../services/login.service";
import { CreateaccountService } from "../services/createaccount.service";

export const activateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  const createAccountService = inject(CreateaccountService);

  if (loginService.isLogin()) {
    return true;
  } else {
    router.navigateByUrl("/login");
    return false;
  }
  
};
