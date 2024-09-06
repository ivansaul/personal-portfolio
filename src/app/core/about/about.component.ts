import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import ABOUT_DATA from '../../../data/about.json';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { BorderArticleComponent } from '../../shared/border-article/border-article.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TechnologiesComponent,
    ServicesComponent,
    SoftSkillsComponent,
    BorderArticleComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  aboutMe = ABOUT_DATA;
}
