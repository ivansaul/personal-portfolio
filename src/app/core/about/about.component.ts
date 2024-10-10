import { Component, computed, inject } from '@angular/core';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { ProfileService } from '../profile/profile.service';
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
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [ProfileService],
})
export class AboutComponent {
  profileService = inject(ProfileService);
  profile = computed(() => {
    return this.profileService.profile();
  });
}
