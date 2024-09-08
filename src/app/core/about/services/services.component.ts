import { Component, computed, inject, input } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ServicesService } from './services.service';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceItemComponent, LoaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  servicesService = inject(ServicesService);
  services = computed(() => this.servicesService.services());
}
