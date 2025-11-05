# Counterngrx

A small Angular + NgRx example app implementing a counter with increment, decrement and reset actions.

## Features
- Global state managed with NgRx Store.
- Actions: [`increment`](src/app/ngrx-store/counter-actions.ts), [`decrement`](src/app/ngrx-store/counter-actions.ts), [`reset`](src/app/ngrx-store/counter-actions.ts).
- Reducer: [`counterReducer`](src/app/ngrx-store/counter-reducer.ts).
- Selector: [`selectCounter`](src/app/ngrx-store/counter.selector.ts).
- Components:
  - [`Counter`](src/app/counter/counter.ts) — displays the current counter value (subscribes to the store via [`selectCounter`](src/app/ngrx-store/counter.selector.ts)).
  - [`CounterOperations`](src/app/counter-operations/counter-operations.ts) — dispatches [`increment`](src/app/ngrx-store/counter-actions.ts), [`decrement`](src/app/ngrx-store/counter-actions.ts) and [`reset`](src/app/ngrx-store/counter-actions.ts).

## How it works (quick)
- The store is configured in [src/app/app-module.ts](src/app/app-module.ts) with:
  StoreModule.forRoot({ counter: counterReducer }) — see [`counterReducer`](src/app/ngrx-store/counter-reducer.ts).
- UI:
  - [src/app/counter/counter.html](src/app/counter/counter.html) binds `{{ count$ | async }}` where `count$` comes from the `selectCounter` selector.
  - [src/app/counter-operations/counter-operations.html](src/app/counter-operations/counter-operations.html) has buttons that call handlers in [`CounterOperations`](src/app/counter-operations/counter-operations.ts) which dispatch the actions.

## Files of interest
- [src/main.ts](src/main.ts) — application bootstrap.
- [src/app/app-module.ts](src/app/app-module.ts) — module + store registration.
- [src/app/ngrx-store/counter-actions.ts](src/app/ngrx-store/counter-actions.ts) — action creators (`increment`, `decrement`, `reset`).
- [src/app/ngrx-store/counter-reducer.ts](src/app/ngrx-store/counter-reducer.ts) — reducer logic.
- [src/app/ngrx-store/counter.selector.ts](src/app/ngrx-store/counter.selector.ts) — feature selector.
- [src/app/counter/counter.ts](src/app/counter/counter.ts) — counter display component.
- [src/app/counter-operations/counter-operations.ts](src/app/counter-operations/counter-operations.ts) — buttons and dispatchers.
- [package.json](package.json) — scripts and dependencies.
- [angular.json](angular.json) — build/serve/test configuration.

## Run
1. Install dependencies:
```sh
npm install

## start
npm start
# or
ng serve

### unit test
npm test