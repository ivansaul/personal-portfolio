import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCardComponent {}
