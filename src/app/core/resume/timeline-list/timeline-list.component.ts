import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconBoxComponent } from '../../../shared/ui/icon-box/icon-box.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineItem } from './timeline-item/timeline-item.model';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-timeline-list',
  standalone: true,
  imports: [IconBoxComponent, TimelineItemComponent, LoaderComponent],
  templateUrl: './timeline-list.component.html',
  styleUrl: './timeline-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineListComponent {
  icon = input.required<string>();
  title = input.required<string>();
  items = input.required<TimelineItem[]>();
}
