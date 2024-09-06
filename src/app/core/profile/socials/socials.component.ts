import { Component, input, signal } from '@angular/core';
import { SocialItem } from './social-item/social-item.model';
import { SocialItemComponent } from './social-item/social-item.component';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [SocialItemComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css',
  schemas: [],
})
export class SocialsComponent {
  socials = input.required<SocialItem[]>();
}
