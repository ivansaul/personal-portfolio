import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './core/profile/profile.component';
import { TabsComponent } from './core/tabs/tabs.component';
import { TabOptionsProvider, TAB_OPTIONS } from './core/tabs/tabs.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TabOptionsProvider],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  tabOptions = inject(TAB_OPTIONS);

  activeTab = this.tabOptions[0];

  ngOnInit(): void {}
}
