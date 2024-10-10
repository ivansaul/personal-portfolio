import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'ui-typewritter',
  standalone: true,
  imports: [],
  templateUrl: './typewritter.component.html',
  styleUrl: './typewritter.component.css',
})
export class TypewriterComponent {
  text = input.required<string>();

  displayedText: string = '';

  constructor() {
    effect(() => {
      console.log('[text]', this.text());

      this.displayedText = '';
      this.typeText();
    });
  }

  typeText(): void {
    let index = 0;
    const baseTypingSpeed = 20; // Faster base speed in milliseconds

    const getRandomTypingSpeed = () => {
      // Faster typing speed between 30ms to 80ms
      return Math.floor(Math.random() * baseTypingSpeed) + 20;
    };

    const typeWriterEffect = () => {
      if (index < this.text().length) {
        // Append the next character to the displayedText
        this.displayedText += this.text().charAt(index);
        index++;

        // Determine if we should pause longer (e.g., at spaces or punctuation)
        const currentChar = this.text().charAt(index - 1);
        let nextTypingSpeed = getRandomTypingSpeed();

        if (currentChar === ' ' || currentChar === '.' || currentChar === ',') {
          // Shorter pause after spaces and punctuation (100-200ms)
          nextTypingSpeed = Math.floor(Math.random() * 100) + 100;
        }

        // Randomly add slightly longer pauses (lowered to 2% chance)
        if (Math.random() < 0.02) {
          // 2% chance to add a long pause
          nextTypingSpeed += 100; // Reduced long pause duration to 200ms
        }

        // Continue typing with the calculated delay
        setTimeout(typeWriterEffect, nextTypingSpeed);
      }
    };

    // Start the typing effect
    typeWriterEffect();
  }
}
