import { Component, inject, input } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ServiceItem } from './service-item/service-item.model';
import { ServicesService } from './services.service';
import { Subscription } from 'rxjs';
import { LoaderComponent } from '../../../shared/loader/loader.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceItemComponent, LoaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: ServiceItem[] = [];

  servicesService = inject(ServicesService);

  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.servicesService
      .getServices()
      .subscribe((services) => {
        this.services = services;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
