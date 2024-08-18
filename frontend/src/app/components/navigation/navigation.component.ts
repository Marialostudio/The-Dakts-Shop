import { Component, inject, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  loginService = inject(LoginService);
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('down', window.scrollY > 0);
    }
    const navSpace = this.el.nativeElement.querySelector('#navspace');
    if (navSpace) {
      if (window.scrollY > 0) {
        this.renderer.setStyle(navSpace, 'padding', '1rem 0');
      } else {
        this.renderer.setStyle(navSpace, 'padding', '1.5rem 0');
      }
    }
  }

}