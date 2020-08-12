import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FoodlogComponent} from './foodlog/foodlog.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
