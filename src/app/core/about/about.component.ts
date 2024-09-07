import { Component, inject } from '@angular/core';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import ABOUT_DATA from '../../../data/about.json';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { BorderArticleComponent } from '../../shared/border-article/border-article.component';
import { About } from './about.model';
import { ProfileService } from '../profile/profile.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';

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
  aboutMe: About = <About>ABOUT_DATA;

  profileService = inject(ProfileService);

  profile = this.profileService.getProfile();
}
