import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from '../ngrx-store/counter.selector';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
count$!: Observable<number>;
constructor(private store: Store<{counter: number}>) {
   this.count$ = this.store.select(selectCounter);
}
}
