import { Component, input } from '@angular/core';
import { SoftSkillItem } from './soft-skill-item/soft-skill-item.model';
import { SoftSkillItemComponent } from './soft-skill-item/soft-skill-item.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [SoftSkillItemComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
})
export class SoftSkillsComponent {
  softSkills = input.required<SoftSkillItem[]>();
}
