import { Component, input } from '@angular/core';
import { TechItem } from './tech-item.model';

@Component({
  selector: 'app-tech-item',
  standalone: true,
  imports: [],
  templateUrl: './tech-item.component.html',
  styleUrl: './tech-item.component.css',
})
export class TechItemComponent {
  item = input.required<TechItem>();
}
