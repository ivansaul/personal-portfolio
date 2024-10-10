import { Component, input } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactItem } from './contact-item/contact-item.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  contacts = input.required<ContactItem[]>();
}
