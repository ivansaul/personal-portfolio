import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import { ProjectItem } from '../project-item.model';
import { ImageComponent } from '../../../shared/ui/image/image.component';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectItemComponent {
  item = input.required<ProjectItem>();

  makeImageScale = false;
}
