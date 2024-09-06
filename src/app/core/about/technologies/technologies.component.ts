import { Component, input } from '@angular/core';
import { TechItemComponent } from './tech-item/tech-item.component';
import { TechItem } from './tech-item/tech-item.model';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechItemComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  technologies = input.required<TechItem[]>();
}
