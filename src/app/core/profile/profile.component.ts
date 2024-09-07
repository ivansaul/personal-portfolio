import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostBinding,
  HostListener,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { SocialsComponent } from './socials/socials.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import {
  GridModule,
  PlaceholderModule,
  UtilitiesModule,
} from '@coreui/angular';
import { Title } from '@angular/platform-browser';
import { ImageComponent } from '../../shared/image/image.component';
// import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ContactsComponent,
    SocialsComponent,
    AsyncPipe,
    JsonPipe,
    PlaceholderModule,
    GridModule,
    UtilitiesModule,
    ImageComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileComponent implements OnInit {
  @HostBinding('class') hostClass = '';

  imageWidth: string = '80';

  profileService = inject(ProfileService);
  titleService = inject(Title);

  initialProfileData: Profile = {
    avatar: '',
    name: '',
    contacts: [],
    socials: [],
    title: '',
    presentation: [],
  };

  profile = signal<Profile>(this.initialProfileData);

  constructor() {
    this.profileService.getProfile().subscribe((profile) => {
      this.titleService.setTitle(`${profile.name} | Portfolio`);
      this.profile.set(profile);
    });
  }

  ngOnInit(): void {
    this.setWidth(window.innerWidth);
  }

  toggleProfile() {
    this.hostClass = this.hostClass ? '' : 'active';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.setWidth(width);
  }

  private setWidth(width: number): void {
    if (width > 1250) {
      this.imageWidth = '150';
    } else if (width > 580) {
      this.imageWidth = '120';
    } else {
      this.imageWidth = '80';
    }
  }
}
