import { Component, computed, inject } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { ResumeService } from './resume.service';
import { TimelineListComponent } from './timeline-list/timeline-list.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    BorderArticleComponent,
    ProgressListComponent,
    TimelineListComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  resumeService = inject(ResumeService);

  languages = computed(() => this.resumeService.languages());
  techSkills = computed(() => this.resumeService.techSkills());

  educations = computed(() => this.resumeService.educations());
  experiences = computed(() => this.resumeService.experiences());
}
