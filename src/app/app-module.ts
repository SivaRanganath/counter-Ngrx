import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Counter } from './counter/counter';
import { CounterOperations } from './counter-operations/counter-operations';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-store/counter-reducer';

@NgModule({
  declarations: [
    App,
    Counter,
    CounterOperations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
