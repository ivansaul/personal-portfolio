import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeChar',
  standalone: true,
})
export class RemoveCharPipe implements PipeTransform {
  transform(value: string, charToRemove: string): string {
    if (!value || !charToRemove) {
      return value;
    }
    return value.split(charToRemove).join(''); // Remove the character
  }
}
