import { Component, inject, model } from '@angular/core';
import { Tab, TAB_OPTIONS, TabOptionsProvider } from './tabs.model';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  providers: [TabOptionsProvider],
})
export class TabsComponent {
  tabs = inject(TAB_OPTIONS);
  activeTab = model.required<Tab>();

  onTabChange(tab: Tab) {
    this.activeTab.update((oldTab) => tab);
  }
}
