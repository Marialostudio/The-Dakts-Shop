import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toastrService = inject(ToastrService);
  shopService = inject(ShopService);

  products: any[] = [];

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

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const parallaxSection = this.el.nativeElement.querySelector('#parallax-section', '#parallax-section-2');
    const parallaxElement = this.el.nativeElement.querySelector('#parallax', '#parallax-2');
    const sectionTop = parallaxSection.offsetTop;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const parallaxHeight = parallaxElement.clientHeight;

    // Calculate the distance scrolled within the section
    const scrolledWithinSection = scrollY - sectionTop + windowHeight;
    
    // Apply the parallax effect only when the section is in view
    if (scrollY >= sectionTop - windowHeight && scrollY <= sectionTop + parallaxSection.clientHeight) {
      parallaxElement.style.transform = 'translateY(' + (scrolledWithinSection * 0.2) + 'px)';
    }
  }

  
}
