import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressComponent } from '../../../../shared/ui/progress/progress.component';
import { ProgressItem } from './progress-item.model';
import { RemoveCharPipe } from '../../../../shared/pipes/remove-char.pipe';

@Component({
  selector: 'app-progress-item',
  standalone: true,
  imports: [ProgressComponent, RemoveCharPipe],
  templateUrl: './progress-item.component.html',
  styleUrl: './progress-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressItemComponent {
  item = input.required<ProgressItem>();
}
