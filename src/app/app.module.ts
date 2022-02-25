import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { FormsModule } from '@angular/forms';
import { FooditemDetailComponent } from './fooditem-detail/fooditem-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditemsComponent,
    FooditemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
