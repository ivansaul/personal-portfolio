import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'input,textarea[uiInput]',
  standalone: true,
  imports: [],
  templateUrl: './control-input.component.html',
  styleUrl: './control-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlInputComponent {}
