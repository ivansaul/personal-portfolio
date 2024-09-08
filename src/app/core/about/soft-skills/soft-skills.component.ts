import { Component, computed, inject } from '@angular/core';
import { SoftSkillItem } from './soft-skill-item/soft-skill-item.model';
import { SoftSkillItemComponent } from './soft-skill-item/soft-skill-item.component';
import { SoftSkillsService } from './soft-skils.service';
import { Subscription } from 'rxjs';
import { LoaderComponent } from '../../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [SoftSkillItemComponent, LoaderComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
})
export class SoftSkillsComponent {
  softSkillsService = inject(SoftSkillsService);

  softSkills = computed(() => this.softSkillsService.softSkills());
}
