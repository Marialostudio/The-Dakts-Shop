import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { IngredientsComponent } from "./components/ingredients/ingredients.component";
import { ShopComponent } from "./components/shop/shop.component";
import { CashewButterComponent } from "./components/products/cashew-butter/cashew-butter.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { MyAccountComponent } from "./components/my-account/my-account.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, IngredientsComponent, ShopComponent, CashewButterComponent, LoginComponent, CartComponent, MyAccountComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
