import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ControlInputComponent } from '../../../shared/ui/control-input/control-input.component';
import { ControlButtonComponent } from '../../../shared/ui/control-button/control-button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ControlInputComponent, ControlButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactFormComponent {}
