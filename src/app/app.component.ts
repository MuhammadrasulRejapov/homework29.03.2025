import { Component } from '@angular/core';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterDisplayComponent, CounterControlsComponent],
  template: `
    <div class="container">
      <h1>Counter</h1>
      <div class="displays">
        <app-counter-display></app-counter-display>
        <app-counter-display></app-counter-display>
      </div>
      <app-counter-controls></app-counter-controls>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #333;
      font-size: 1.5rem;
    }
    .displays {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  `]
})
export class AppComponent {}