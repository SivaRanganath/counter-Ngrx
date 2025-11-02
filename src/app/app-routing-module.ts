import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter } from './counter/counter';

const routes: Routes = [{path: '', component: Counter}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
