import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  template: `
    <div class="display">
      {{ counterService.count() }} 
      <span class="status">{{ counterService.isEven() ? 'Even' : 'Odd' }}</span>
    </div>
  `,
  styles: [`
    .display {
      font-size: 2rem;
      text-align: center;
      padding: 10px;
      margin: 10px;
      background-color: #f0f0f0;
      border-radius: 8px;
      width: 150px;
      display: inline-block;
    }
    .status {
      font-size: 1rem;
      color: #555;
      margin-left: 5px;
    }
  `]
})
export class CounterDisplayComponent {
  counterService = inject(CounterService);
}