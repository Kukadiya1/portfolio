import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { gsap } from 'gsap';
import { LucideAngularModule, Mail, Phone, MapPin, Plane } from 'lucide-angular';
import { DataService } from '../../sahred/service/data.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly mailIcon = Mail;
  readonly phoneIcon = Phone;
  readonly paperPlanIcon = Plane;
  readonly mapPinIcon = MapPin;
  contactForm!: FormGroup;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  @ViewChild('heading', { static: true }) heading!: ElementRef;
  @ViewChild('contactInfo', { static: true }) contactInfo!: ElementRef;
  @ViewChild('contactFormEl', { static: true }) contactFormEl!: ElementRef;

  constructor(private fb: FormBuilder, public dataService: DataService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });

    // GSAP animations on load
    gsap.from(this.heading.nativeElement, {
      opacity: 0,
      y: 30,
      duration: 1,
    });

    gsap.from(this.contactInfo.nativeElement, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(this.contactFormEl.nativeElement, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.6,
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.contactForm.reset();

      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 1500);
  }
}
