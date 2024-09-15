import { Component, effect, inject } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileService } from '../profile/profile.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BorderArticleComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ProfileService, ContactService],
})
export class ContactComponent {
  private profileService = inject(ProfileService);
  private sanitizer = inject(DomSanitizer);
  profile = this.profileService.profile;

  safeGoogleMapUrl?: SafeResourceUrl;

  constructor() {
    effect(() => {
      this.safeGoogleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.profile().googleMap
      );
    });
  }
}
