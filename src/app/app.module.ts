import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { HomeComponent } from './doctor-dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorHomeComponent,
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
