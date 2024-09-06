import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostBinding,
  signal,
} from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { SocialsComponent } from './socials/socials.component';
import USER_PROFILE from '../../../data/profile.json';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ContactsComponent, SocialsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileComponent {
  @HostBinding('class') hostClass = '';

  profile = signal(<Profile>USER_PROFILE);

  toggleProfile() {
    this.hostClass = this.hostClass ? '' : 'active';
  }
}
