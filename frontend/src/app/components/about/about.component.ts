import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  initialZoomLevel = 170;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Zoom effect
    this.updateBackgroundSize(scrollTop);

    // Parallax effect
    this.applyParallaxEffect(scrollTop);

    // Efecto slide in
    this.checkSlideInEffect();
  }

  updateBackgroundSize(scrollTop: number): void {
    const zoomLevel = Math.min(this.initialZoomLevel + scrollTop / 15, 200);
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.about-image'),
      'background-size',
      `${zoomLevel}%`
    );
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
