import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  signal,
} from '@angular/core';
import { BorderArticleComponent } from '../../shared/ui/border-article/border-article.component';
import { CategoryFilterComponent } from '../../shared/ui/category-filter/category-filter.component';
import { CategoryFilter } from '../../shared/ui/category-filter/category-filter.model';
import { PortfolioService } from './portfolio.service';
import { ProjectItemComponent } from './project-item/project-item.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    BorderArticleComponent,
    CategoryFilterComponent,
    ProjectItemComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  categories: CategoryFilter[] = [];

  selectedCategory = signal<CategoryFilter | undefined>(undefined);

  portfolioService = inject(PortfolioService);

  constructor() {
    effect(
      () => {
        this.calculateCategories();
      },
      { allowSignalWrites: true }
    );
  }

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (!category || !category.value) {
      return this.portfolioService.projects();
    }

    return this.portfolioService.projects().filter((project) => {
      console.log();

      return project.category === this.selectedCategory()?.name;
    });
  });

  calculateCategories() {
    const projectList = this.portfolioService.projects();
    if (!projectList || projectList.length === 0) return;

    let categories = new Set<string>([
      '',
      ...this.portfolioService.projects().map((project) => project.category),
    ]);

    this.categories = Array.from(categories).map((category) => {
      const categoryFilter: CategoryFilter = {
        name: category || 'All',
        value: category,
      };
      return categoryFilter;
    });

    this.selectedCategory.set(this.categories[0]);
  }
}
