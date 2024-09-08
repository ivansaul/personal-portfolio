import { Component } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BorderArticleComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {}
