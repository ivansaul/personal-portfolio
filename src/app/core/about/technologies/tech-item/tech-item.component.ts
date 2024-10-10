import { Component, input } from '@angular/core';
import { TechItem } from './tech-item.model';
import { ImageComponent } from '../../../../shared/ui/image/image.component';

@Component({
  selector: 'app-tech-item',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './tech-item.component.html',
  styleUrl: './tech-item.component.css',
})
export class TechItemComponent {
  item = input.required<TechItem>();
}
