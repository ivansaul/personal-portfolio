import { Component, HostListener, input } from '@angular/core';
import { SoftSkillItem } from './soft-skill-item.model';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { ImageComponent } from '../../../../shared/ui/image/image.component';

@Component({
  selector: 'app-soft-skill-item',
  standalone: true,
  imports: [ContentCardComponent, ImageComponent],
  templateUrl: './soft-skill-item.component.html',
  styleUrl: './soft-skill-item.component.css',
})
export class SoftSkillItemComponent {
  softSkill = input.required<SoftSkillItem>();

  imageWidth: string = '60';

  constructor() {
    this.setWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.setWidth(width);
  }

  private setWidth(width: number): void {
    if (width > 580) {
      this.imageWidth = '80';
    } else {
      this.imageWidth = '60';
    }
  }
}
