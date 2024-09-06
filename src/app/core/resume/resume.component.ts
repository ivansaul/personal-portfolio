import { Component } from '@angular/core';
import { BorderArticleComponent } from '../../shared/border-article/border-article.component';
import { IconBoxComponent } from '../../shared/icon-box/icon-box.component';
import { ContentCardComponent } from '../../shared/content-card/content-card.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [BorderArticleComponent, IconBoxComponent, ContentCardComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
