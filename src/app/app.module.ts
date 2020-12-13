import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { HomeComponent } from './doctor-dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
