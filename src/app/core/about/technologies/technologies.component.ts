import { Component, computed, inject } from '@angular/core';
import { TechItemComponent } from './tech-item/tech-item.component';
import { TechnologiesService } from './technologies.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechItemComponent, AsyncPipe, LoaderComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  techService = inject(TechnologiesService);
  technologies = computed(() => this.techService.technologies());
}
