import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { AdvicesComponent } from './improve-your-body/advices/advices.component';
import { WorkoutsComponent } from './improve-your-body/workouts/workouts.component';
import { DietComponent } from './improve-your-body/diet/diet.component';




@NgModule({
  declarations: [
    AppComponent,
    ImproveYourBodyComponent,
    AdvicesComponent,
    WorkoutsComponent,
    DietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
