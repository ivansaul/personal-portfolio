import { Component, input } from '@angular/core';
import { ServiceItem } from './service-item.model';
import { ContentCardComponent } from '../../../../shared/content-card/content-card.component';
import { ImageComponent } from '../../../../shared/image/image.component';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [ContentCardComponent, ImageComponent],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css',
})
export class ServiceItemComponent {
  service = input.required<ServiceItem>();
}
