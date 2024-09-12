import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  HostBinding,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { SocialsComponent } from './socials/socials.component';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import { Meta, Title } from '@angular/platform-browser';
import { ImageComponent } from '../../shared/ui/image/image.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ContactsComponent, SocialsComponent, ImageComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProfileService],
})
export class ProfileComponent implements OnInit {
  @HostBinding('class') hostClass = '';

  imageWidth: string = '80px';

  profileService = inject(ProfileService);
  titleService = inject(Title);
  metaService = inject(Meta);

  initialProfileData: Profile = {
    avatar: '',
    name: '',
    title: '',
    presentation: [],
  };

  profile = computed(() => {
    const data = this.profileService.profile();
    return data || this.initialProfileData;
  });

  contacts = computed(() => this.profileService.contacts());
  socials = computed(() => this.profileService.socials());

  constructor() {
    effect(() => {
      const title = this.profile().name
        ? `${this.profile().name} | Portfolio`
        : 'Portfolio';
      this.titleService.setTitle(title);

      this.metaService.updateTag({
        name: 'description',
        content: this.profile().presentation.join(' '),
      });
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
