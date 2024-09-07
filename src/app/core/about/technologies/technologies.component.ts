import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TechItemComponent } from './tech-item/tech-item.component';
import { TechnologiesService } from './technologies.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { TechItem } from './tech-item/tech-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechItemComponent, AsyncPipe, LoaderComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent implements OnInit, OnDestroy {
  techService = inject(TechnologiesService);

  technologies: TechItem[] = [];
  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.techService
      .getTechnologies()
      .subscribe((technologies) => {
        this.technologies = technologies;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
