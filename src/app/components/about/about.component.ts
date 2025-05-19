import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DataService } from '../../sahred/service/data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('leftContent') leftContent!: ElementRef;
  @ViewChild('rightContent') rightContent!: ElementRef;
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  constructor(public dataService: DataService) { }

  ngAfterViewInit(): void {
    gsap.from(this.aboutSection.nativeElement, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: this.aboutSection.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.from(this.leftContent.nativeElement, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.leftContent.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.from(this.rightContent.nativeElement, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      delay: 0.4,
      scrollTrigger: {
        trigger: this.rightContent.nativeElement,
        start: 'top 80%',
      }
    });

    this.skillBars.forEach((bar, index) => {
      gsap.to(bar.nativeElement, {
        width: this.dataService.skills[index].level + '%',
        duration: 1,
        delay: 0.6 + index * 0.1,
        scrollTrigger: {
          trigger: bar.nativeElement,
          start: 'top 90%',
        }
      });
    });
  }
}
