import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ControlInputComponent } from '../../../shared/ui/control-input/control-input.component';
import { ControlButtonComponent } from '../../../shared/ui/control-button/control-button.component';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { ContactForm } from './contact-form.model';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    LoaderComponent,
    ControlInputComponent,
    ControlButtonComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactFormComponent implements OnInit {
  private contactService = inject(ContactService);

  isSubmitting = false;
  isSubmitted = false;
  isServerError = false;

  contactForm = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    mobile: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^\\+?[1-9]\\d{1,14}[-\\s]?\\d{4,14}$'),
      ],
    }),
    message: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  get isNameInvalid() {
    return (
      this.contactForm.controls.name.touched &&
      !this.contactForm.controls.name.valid
    );
  }

  get isEmailInvalid() {
    return (
      this.contactForm.controls.email.touched &&
      !this.contactForm.controls.email.valid
    );
  }

  get isMobileInvalid() {
    return (
      this.contactForm.controls.mobile.touched &&
      !this.contactForm.controls.mobile.valid
    );
  }

  get isMessageInvalid() {
    return (
      this.contactForm.controls.message.touched &&
      !this.contactForm.controls.message.valid
    );
  }

  ngOnInit(): void {
    const rawFormData = localStorage.getItem('saved-contact-form');

    if (rawFormData) {
      const formValues: ContactForm = JSON.parse(rawFormData);
      this.contactForm.patchValue(formValues);
    }

    this.contactForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((formValues) => {
        localStorage.setItem('saved-contact-form', JSON.stringify(formValues));
      });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.isSubmitting = true;

    if (!this.contactForm.valid) {
      return;
    }

    const formData: ContactForm = {
      name: this.contactForm.controls.name.value!,
      email: this.contactForm.controls.email.value!,
      mobile: this.contactForm.controls.mobile.value!,
      message: this.contactForm.controls.message.value!,
    };

    this.contactService.sendInquiry(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: (error) => {
        this.isServerError = true;
        this.isSubmitting = false;
      },
    });
  }
}
