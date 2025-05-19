import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';
import { LucideAngularModule, ArrowUp } from 'lucide-angular';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  readonly arrowUpIcon = ArrowUp;
  isVisible = false;

  // Listen to window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMouseEnter(el: HTMLElement) {
    gsap.to(el, { scale: 1.1, duration: 0.2 });
  }

  onMouseLeave(el: HTMLElement) {
    gsap.to(el, { scale: 1, duration: 0.2 });
  }

  onMouseDown(el: HTMLElement) {
    gsap.to(el, { scale: 0.9, duration: 0.1 });
  }

  onMouseUp(el: HTMLElement) {
    gsap.to(el, { scale: 1.1, duration: 0.1 });
  }
}
