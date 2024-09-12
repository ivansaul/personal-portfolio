import { Component, effect, inject, OnInit } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileService } from '../profile/profile.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BorderArticleComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ProfileService],
})
export class ContactComponent implements OnInit {
  private profileService = inject(ProfileService);
  private sanitizer = inject(DomSanitizer);
  profile = this.profileService.profile;

  safeGoogleMapUrl?: SafeResourceUrl;

  constructor() {
    effect(() => {
      console.log(this.profile());
      this.safeGoogleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.profile().googleMap
      );
    });
  }

  ngOnInit(): void {}
}
