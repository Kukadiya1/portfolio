import { Component, ElementRef, ViewChild } from '@angular/core';
import { LucideAngularModule, Twitter, Linkedin, Github, ChevronDown } from 'lucide-angular';

import gsap from 'gsap';
import { DataService } from '../../sahred/service/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
  readonly twitterIcon = Twitter;
  readonly linkedinIcon = Linkedin;
  readonly githubIcon = Github;
  readonly chevronDownIcon = ChevronDown;

  constructor(public dataService: DataService, private modalService: NgbModal) { }

  ngAfterViewInit() {
    gsap.from(this.heroSection.nativeElement.querySelectorAll('.fade-item'), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.bounce-down', {
      opacity: 0,
      y: -20,
      delay: 1.5,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
