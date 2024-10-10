import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { SocialItem } from './social-item.model';

@Component({
  selector: 'app-social-item',
  standalone: true,
  imports: [],
  templateUrl: './social-item.component.html',
  styleUrl: './social-item.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SocialItemComponent {
  item = input.required<SocialItem>();
}
