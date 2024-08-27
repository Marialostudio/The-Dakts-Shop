import { Routes } from '@angular/router';
import { activateGuard } from "./guards/activate.guard";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ShopComponent } from "./components/shop/shop.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { MyAccountComponent } from "./components/my-account/my-account.component";
import { VerifyuserComponent } from "./components/verifyuser/verifyuser.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { CashewButterComponent } from "./components/products/cashew-butter/cashew-butter.component";

export const routes: Routes = [
    {path: 'home', title: "Home", component: HomeComponent},
    {path: 'about', title: "Our Passion", component: AboutComponent},
    {path: 'ingredients', title: "Our Harvest", component: IngredientsComponent},
    {path: 'shop', title: "Shop", component: ShopComponent},
    {path: 'login', title: "Log In", component: LoginComponent},
    {path: 'cart', title: "Cart", component: CartComponent},
    {path: 'my-account', title: "My Account", component: MyAccountComponent, canActivate: [activateGuard]},
    {path: 'verifyuser', title: "Verify your account", component: VerifyuserComponent},
    {path: 'products/cashew-butter', title: "Cashew Butter Stuffed Dates Covered With Dark Chocolate", component: CashewButterComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**', title: "404 | Page Not Found", component: PageNotFoundComponent}
];
