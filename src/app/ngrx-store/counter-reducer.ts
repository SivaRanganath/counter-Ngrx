import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter-actions";

const initialSize = 0;

export const counterReducer = createReducer(
  initialSize,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(reset, (state, action)=> action.value),
);