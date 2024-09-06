import { Component, input } from '@angular/core';
import { ServiceItem } from './service-item.model';
import { ContentCardComponent } from '../../../../shared/content-card/content-card.component';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css',
})
export class ServiceItemComponent {
  service = input.required<ServiceItem>();
}
