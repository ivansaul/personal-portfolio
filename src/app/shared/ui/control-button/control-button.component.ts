import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[uiButton]',
  standalone: true,
  imports: [],
  templateUrl: './control-button.component.html',
  styleUrl: './control-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlButtonComponent {}
