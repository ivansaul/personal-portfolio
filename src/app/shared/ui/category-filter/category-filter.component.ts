import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  model,
} from '@angular/core';
import { CategoryFilter } from './category-filter.model';

@Component({
  selector: 'ui-category-filter',
  standalone: true,
  imports: [],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent {
  categories = input.required<CategoryFilter[]>();
  selected = model<CategoryFilter>();

  isDropdownOptionsVisible = false;

  onClickCategory(category: CategoryFilter) {
    this.selected.set(category);
  }

  toggleCategoryOptions() {
    this.isDropdownOptionsVisible = !this.isDropdownOptionsVisible;
  }

  onClickCategoryDropdown(category: CategoryFilter) {
    this.onClickCategory(category);
    this.toggleCategoryOptions();
  }
}
