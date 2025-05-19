import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, LucideAngularModule } from 'lucide-angular';
import { ProjectDetailsComponent } from './project-details/project-details.component';

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  github: string;
  demo: string;
}


@Component({
  selector: 'app-project',
  imports: [CommonModule, LucideAngularModule, ProjectDetailsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  readonly githubIcon = Github;
  readonly externalLinkIcon = ExternalLink;
  categories: string[] = ['all', 'frontend', 'backend', 'fullstack'];
  selectedCategory: string = 'all';

  showModal = false;
  selectedProject = {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-featured online store...",
    description: {
      overview: "A comprehensive e-commerce solution designed to provide seamless shopping experiences across all devices. This platform offers everything from product browsing to secure checkout, with a focus on performance and user engagement to drive conversions.",
      features: [
        "Real-time inventory management with instant stock updates",
        "Secure payment processing with multiple gateway integrations",
        "Personalized product recommendations powered by user behavior analytics",
        "Mobile-responsive design with optimized checkout flow",
        "Advanced search with filters, categories, and smart suggestions"
      ],
      techStack: [
        "React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API", "AWS S3", "Redis"
      ],
      challenges: "A significant challenge was optimizing the checkout process for both performance and security. I implemented a multi-step validation system that reduced cart abandonment by 23% while maintaining PCI compliance. Another challenge was building a scalable product catalog that could handle 10,000+ items without performance degradation.",
      outcome: "The platform increased client's online sales by 45% in the first quarter after launch, with mobile conversions improving by 60%. The solution dramatically reduced server costs with optimized database queries and intelligent caching strategies, while providing a foundation that can scale with business growth."
    },
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  };

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store...',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
      category: ['frontend', 'fullstack'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks...',
      image: 'https://images.pexels.com/photos/6956787/pexels-photo-6956787.jpeg',
      category: ['frontend', 'backend'],
      technologies: ['React', 'Redux', 'Firebase'],
      github: '#',
      demo: '#',
    },
    // Add remaining projects here...
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') return this.projects;
    return this.projects.filter(p => p.category.includes(this.selectedCategory));
  }

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    gsap.from('.section-title', {
      opacity: 0,
      y: 40,
      duration: 0.8,
    });

    gsap.from('.filter-btn', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
    });

    // gsap.from('.project-card', {
    //   opacity: 0,
    //   y: 30,
    //   duration: 0.6,
    //   stagger: 0.2,
    //   delay: 0.6,
    // });
  }

  setFilter(category: string): void {
    this.selectedCategory = category;

    // animate cards on filter
    // gsap.from('.project-card', {
    //   opacity: 0,
    //   y: 30,
    //   duration: 0.6,
    //   stagger: 0.2,
    // });
  }
}
