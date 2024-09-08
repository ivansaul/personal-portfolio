import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BorderArticleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactComponent {}
