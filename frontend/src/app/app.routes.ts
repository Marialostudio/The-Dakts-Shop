import { Routes } from '@angular/router';
import { activateGuard } from "./guards/activate.guard";
import { HomeComponent } from "./components/home/home.component";
import { StorieComponent } from "./components/storie/storie.component";
import { ShopComponent } from "./components/shop/shop.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { MyAccountComponent } from "./components/my-account/my-account.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {path: 'home', title: "Home", component: HomeComponent},
    {path: 'storie', title: "Our Storie", component: StorieComponent},
    {path: 'shop', title: "Shop", component: ShopComponent},
    {path: 'login', title: "Log In", component: LoginComponent},
    {path: 'cart', title: "Cart", component: CartComponent},
    {path: 'my-account', title: "My Account", component: MyAccountComponent, canActivate: [activateGuard]},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**', title: "404 | Page Not Found", component: PageNotFoundComponent}
];
