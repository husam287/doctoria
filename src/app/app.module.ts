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
import { AppointmentsTimeCardComponent } from './doctor-profile/doctor-details/doc-appointments/appointments-time-card/appointments-time-card.component';
import { AppointmentsCheckoutComponent } from './doctor-profile/doctor-details/doc-appointments/appointments-checkout/appointments-checkout.component';
import { ReviewComponent } from './doctor-profile/doctor-details/doc-reviews/review/review.component';
import { AddReviewComponent } from './doctor-profile/doctor-details/doc-reviews/add-review/add-review.component';
import { StarsComponent } from './doctor-profile/doctor-details/doc-reviews/review/stars/stars.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { AdvicesComponent } from './improve-your-body/advices/advices.component';
import { WorkoutsComponent } from './improve-your-body/workouts/workouts.component';
import { DietComponent } from './improve-your-body/diet/diet.component';
import { HomeComponent } from './home/home.component';
import { EmailsComponent } from './home/emails/emails.component';
import { SearchComponent } from './home/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorProfileComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    DocInfoComponent,
    DocAppointmentsComponent,
    DocReviewsComponent,
    AppointmentsTimeCardComponent,
    AppointmentsCheckoutComponent,
    ReviewComponent,
    AddReviewComponent,
    StarsComponent,
    ImproveYourBodyComponent,
    AdvicesComponent,
    WorkoutsComponent,
    DietComponent,
    HomeComponent,
    EmailsComponent,
    SearchComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
