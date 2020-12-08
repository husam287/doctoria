import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FilterComponent } from './filter/filter.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FilterComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
