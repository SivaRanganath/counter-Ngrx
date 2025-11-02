import { createFeatureSelector, createSelector } from "@ngrx/store";

export let selectCounter = createFeatureSelector<number>('counter');