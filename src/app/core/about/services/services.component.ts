import { Component, input } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ServiceItem } from './service-item/service-item.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = input.required<ServiceItem[]>();
}
