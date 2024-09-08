import { Component, computed, inject } from '@angular/core';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { About } from './about.model';
import { ProfileService } from '../profile/profile.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TechnologiesComponent,
    ServicesComponent,
    SoftSkillsComponent,
    BorderArticleComponent,
    LoaderComponent,
    AsyncPipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  profileService = inject(ProfileService);
  profile = computed(() => {
    return this.profileService.profile();
  });
}
