import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  // Define a writable signal for count, initialized to 0
  private _count = signal(0);

  // Expose count as a read-only signal
  count = this._count.asReadonly();

  // Computed signal to check if count is even
  isEven = computed(() => this._count() % 2 === 0);

  // Increment method
  increment() {
    this._count.update(value => value + 1);
  }

  // Decrement method (prevent going below 0)
  decrement() {
    this._count.update(value => Math.max(0, value - 1));
  }

  // Reset method
  reset() {
    this._count.set(0);
  }
}