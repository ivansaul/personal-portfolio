import { Component, input } from '@angular/core';
import { TimelineItem } from './timeline-item.model';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css',
})
export class TimelineItemComponent {
  item = input.required<TimelineItem>();
}
