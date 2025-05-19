import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  readonly xIcon = X;
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  @Input() project: {
    title: string;
    description: {
      overview: string;
      features: string[];
      techStack: string[];
      challenges: string;
      outcome: string;
    };
    image?: string;
  } | null = null;

  closeModal() {
    this.onClose.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
