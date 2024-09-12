import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./core/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./core/resume/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./core/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  // {
  //   path: 'blog',
  //   loadComponent: () =>
  //     import('./core/blog/blog.component').then((m) => m.BlogComponent),
  // },
  {
    path: 'contact',
    loadComponent: () =>
      import('./core/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  { path: '**', redirectTo: 'about' },
];
