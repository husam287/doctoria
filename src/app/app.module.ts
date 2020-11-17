import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { AdvicesComponent } from './advices/advices.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { DietComponent } from './diet/diet.component';

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
