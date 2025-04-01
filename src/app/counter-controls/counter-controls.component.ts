import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  template: `
    <div class="controls">
      <button (click)="counterService.increment()">+</button>
      <button (click)="counterService.decrement()">−</button>
      <button (click)="counterService.reset()">Reset</button>
    </div>
  `,
  styles: [`
    .controls {
      text-align: center;
      margin: 20px;
    }
    button {
      padding: 10px 20px;
      margin: 0 5px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #45a049;
    }
    button:nth-child(2) {
      background-color: #f44336;
    }
    button:nth-child(2):hover {
      background-color: #da190b;
    }
    button:nth-child(3) {
      background-color: #2196F3;
    }
    button:nth-child(3):hover {
      background-color: #0b7dda;
    }
  `]
})
export class CounterControlsComponent {
  counterService = inject(CounterService);
}