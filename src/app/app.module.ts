import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { HomeComponent } from './doctor-dashboard/home/home.component';
import { PatientsComponent } from './doctor-dashboard/patients/patients.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { AllComponent } from './doctor-dashboard/appointments/all/all.component';
import { PendingComponent } from './doctor-dashboard/appointments/pending/pending.component';
import { CompletedComponent } from './doctor-dashboard/appointments/completed/completed.component';
import { ReferralsComponent } from './doctor-dashboard/appointments/referrals/referrals.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HomeComponent,
    PatientsComponent,
    AppointmentsComponent,
    AllComponent,
    PendingComponent,
    CompletedComponent,
    ReferralsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
