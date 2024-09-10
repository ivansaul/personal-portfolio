import { Component, Input, input } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'ui-image',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  src = input.required<string>();
  alt = input<string>();
  width = input<string>('100%');
  height = input<string>();
  scale = input<boolean>(false);
  isImageLoaded = false; // Tracks whether the image has finished loading

  loaderPadding = input<string>('0');
  @Input() loaderWidth?: string;
  @Input() loaderHeight?: string;

  // Triggered when the image is successfully loaded
  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  // Triggered if there is an error loading the image
  onImageError(): void {
    console.error('Image failed to load.');
    this.isImageLoaded = false;
  }
}
