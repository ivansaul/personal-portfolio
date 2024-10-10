import { InjectionToken, Provider } from '@angular/core';

export interface Tab {
  id: string;
  title: string;
}

export const TabOptions: Tab[] = [
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'portfolio', title: 'Portfolio' },
  // { id: 'blog', title: 'Blog' },
  { id: 'contact', title: 'Contact' },
];

export const TAB_OPTIONS = new InjectionToken<Tab[]>('navigation-tab-options');

export const TabOptionsProvider: Provider = {
  provide: TAB_OPTIONS,
  useValue: TabOptions,
};
