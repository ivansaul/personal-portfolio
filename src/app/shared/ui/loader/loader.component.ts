import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  @Input() width: string = '80';
  @Input() height: string = '80';
  @Input() padding: string = '0';
}
