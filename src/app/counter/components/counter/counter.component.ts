import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: false,
    template: `
        <p>Contador: {{ counter }}</p>
        <button class="increaseDecrease" (click)="increaseCounter()">+</button>
        <button class="increaseDecrease" (click)="resetCounter()">Reset</button>
        <button class="increaseDecrease" (click)="decreaseCounter()">-</button>
    `
})

export class CounterComponent {
  public counter: number = 0;

  increaseCounter = (): void => {
    this.counter++;
  }

  decreaseCounter = (): void => {
    this.counter--;
  }

  resetCounter = (): void => {
    this.counter = 0;
  }
}