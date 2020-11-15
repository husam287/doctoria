import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorCardComponent } from './doctor-profile/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './doctor-profile/doctor-details/doctor-details.component';
import { DocInfoComponent } from './doctor-profile/doctor-details/doc-info/doc-info.component';
import { DocAppointmentsComponent } from './doctor-profile/doctor-details/doc-appointments/doc-appointments.component';
import { DocReviewsComponent } from './doctor-profile/doctor-details/doc-reviews/doc-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorProfileComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    DocInfoComponent,
    DocAppointmentsComponent,
    DocReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
