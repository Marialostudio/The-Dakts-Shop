import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  
  onWindowScroll(){
    const navSticky = this.el.nativeElement.querySelector('#navi');
    if (navSticky) {
      navSticky.classList.toggle('fixed-top', window.scrollY > 30);
    }
    /* const navStick = this.el.nativeElement.querySelector('#navi');
    if (navStick) {
      if (window.scrollY > 0) {
        this.renderer.setStyle(navStick, 'padding', '1rem 0');
      } else {
        this.renderer.setStyle(navStick, 'padding', '1.5rem 0');
      }
    } */
  }

}
