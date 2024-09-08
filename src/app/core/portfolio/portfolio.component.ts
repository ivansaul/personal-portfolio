import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [BorderArticleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {}
