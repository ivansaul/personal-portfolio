import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCardComponent } from '../../../shared/ui/content-card/content-card.component';
import { ProgressItemComponent } from './progress-item/progress-item.component';
import { ProgressItem } from './progress-item/progress-item.model';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-progress-list',
  standalone: true,
  imports: [LoaderComponent, ContentCardComponent, ProgressItemComponent],
  templateUrl: './progress-list.component.html',
  styleUrl: './progress-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressListComponent {
  items = input.required<ProgressItem[]>();
  title = input.required<string>();
}
