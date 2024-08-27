import { Component, inject, HostListener, Renderer2, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  toastrService = inject(ToastrService);
  shopService = inject(ShopService);

  products: any[] = [];

  initialZoomLevel = 170;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Parallax effect
    this.applyParallaxEffect(scrollTop);

    // Efecto slide in
    this.checkSlideInEffect();
  }

  ngOnInit(){
    this.shopService.getProducts().subscribe((res: any) => {
      if (res.result === 'Good!') {
        //console.log('Respuesta:', res);
        this.products = res.data;
        //console.log('Productos:', this.products)
      } else {
        this.toastrService.error('An error ocurred');
      }
    });
  }

  applyParallaxEffect(scrollTop: number): void {
    const parallaxSection = this.el.nativeElement.querySelector('#parallax-section');
    const parallaxElement = this.el.nativeElement.querySelector('#parallax');
    const sectionTop = parallaxSection.offsetTop;
    const windowHeight = window.innerHeight;

    // Calculate the distance scrolled within the section
    const scrolledWithinSection = scrollTop - sectionTop + windowHeight;

    // Apply the parallax effect only when the section is in view
    if (scrollTop >= sectionTop - windowHeight && scrollTop <= sectionTop + parallaxSection.clientHeight) {
      this.renderer.setStyle(
        parallaxElement,
        'transform',
        `translateY(${scrolledWithinSection * 0.2}px)`
      );
    }
  }

  checkSlideInEffect(): void {
    const slideElements = this.el.nativeElement.querySelectorAll('.slide-in');
    const windowHeight = window.innerHeight;

    slideElements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      if (isVisible) {
        this.renderer.addClass(element, 'active');
      }
    });
  }

}
