import { Component, inject } from '@angular/core';
import { SoftSkillItem } from './soft-skill-item/soft-skill-item.model';
import { SoftSkillItemComponent } from './soft-skill-item/soft-skill-item.component';
import { SoftSkillsService } from './soft-skils.service';
import { Subscription } from 'rxjs';
import { LoaderComponent } from '../../../shared/loader/loader.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [SoftSkillItemComponent, LoaderComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
})
export class SoftSkillsComponent {
  softSkills: SoftSkillItem[] = [];

  softSkillsService = inject(SoftSkillsService);

  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.softSkillsService
      .getSoftSkills()
      .subscribe((skills) => {
        this.softSkills = skills;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
