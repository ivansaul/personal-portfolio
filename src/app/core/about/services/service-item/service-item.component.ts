import { Component, input } from '@angular/core';
import { ServiceItem } from './service-item.model';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { ImageComponent } from '../../../../shared/ui/image/image.component';

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
