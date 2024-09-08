import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContactItem } from './contact-item.model';
import { IconBoxComponent } from '../../../../shared/ui/icon-box/icon-box.component';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [IconBoxComponent],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItemComponent {
  item = input.required<ContactItem>();
}
