import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Code, LucideAngularModule, Twitter, Linkedin, Github, Heart } from 'lucide-angular';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly codeIcon = Code;
  readonly twitterIcon = Twitter;
  readonly linkedinIcon = Linkedin;
  readonly githubIcon = Github;
  readonly heartIcon = Heart;
  currentYear: number = new Date().getFullYear();

  constructor(public dataService: DataService) { }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scaleUp(event: MouseEvent) {
    gsap.to(event.currentTarget, { scale: 1.2, y: -3, duration: 0.3 });
  }

  scaleDown(event: MouseEvent) {
    gsap.to(event.currentTarget, { scale: 1, y: 0, duration: 0.3 });
  }
}
