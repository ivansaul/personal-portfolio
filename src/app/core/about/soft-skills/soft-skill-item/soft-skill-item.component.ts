import { Component, input } from '@angular/core';
import { SoftSkillItem } from './soft-skill-item.model';
import { ContentCardComponent } from '../../../../shared/content-card/content-card.component';

@Component({
  selector: 'app-soft-skill-item',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './soft-skill-item.component.html',
  styleUrl: './soft-skill-item.component.css',
})
export class SoftSkillItemComponent {
  softSkill = input.required<SoftSkillItem>();
}
