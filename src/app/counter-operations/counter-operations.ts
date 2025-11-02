import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../ngrx-store/counter-actions';

@Component({
  selector: 'app-counter-operations',
  standalone: false,
  templateUrl: './counter-operations.html',
  styleUrl: './counter-operations.scss',
})
export class CounterOperations {
constructor(private store: Store) {}

  onIncrement() {
    this.store.dispatch(increment({value: 1}));
  }

  onDecrement() {
    this.store.dispatch(decrement({value: 1}));
  }

  onReset() {
    this.store.dispatch(reset({value: 0}));
  }
}
