import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LucideAngularModule, Code, Sun, Moon, X, Menu } from 'lucide-angular';
import { ThemeService } from '../../service/theme.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly codeIcon = Code;
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly xIcon = X;
  readonly menuIcon = Menu;

  navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];
  isScrolled: boolean = false;

  menuOpen = false;

  constructor(public themeService: ThemeService,public dataService:DataService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll position:', scrollY);

    // Example: Show back-to-top button if scroll > 100
    if (scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

}
