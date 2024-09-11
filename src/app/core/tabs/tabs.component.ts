import { Component, inject } from '@angular/core';
import { TAB_OPTIONS, TabOptionsProvider } from './tabs.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  providers: [TabOptionsProvider],
})
export class TabsComponent {
  tabs = inject(TAB_OPTIONS);
}
