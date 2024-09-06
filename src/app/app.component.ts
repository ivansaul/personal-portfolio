import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeComponent } from './core/resume/resume.component';
import { PortfolioComponent } from './core/portfolio/portfolio.component';
import { AboutComponent } from './core/about/about.component';
import { BlogComponent } from './core/blog/blog.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProfileComponent } from './core/profile/profile.component';
import { TabsComponent } from './core/tabs/tabs.component';
import { TabOptionsProvider, TAB_OPTIONS } from './core/tabs/tabs.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileComponent,
    TabsComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TabOptionsProvider],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  tabOptions = inject(TAB_OPTIONS);

  activeTab = this.tabOptions[0];

  ngOnInit(): void {}
}
