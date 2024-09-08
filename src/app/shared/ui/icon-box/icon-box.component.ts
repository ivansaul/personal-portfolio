import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';

@Component({
  selector: 'ui-icon-box',
  standalone: true,
  imports: [],
  templateUrl: './icon-box.component.html',
  styleUrl: './icon-box.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBoxComponent {
  icon = input.required<string>();
}
