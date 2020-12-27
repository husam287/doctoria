import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { SidebarComponent } from './doctor-dashboard/sidebar/sidebar.component';
import { PatientsComponent } from './doctor-dashboard/patients/patients.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { AllComponent } from './doctor-dashboard/appointments/all/all.component';
import { PendingComponent } from './doctor-dashboard/appointments/pending/pending.component';
import { CompletedComponent } from './doctor-dashboard/appointments/completed/completed.component';
import { ReferralsComponent } from './doctor-dashboard/appointments/referrals/referrals.component';
import { DocTimeslotsComponent } from './doctor-dashboard/doc-timeslots/doc-timeslots.component';
import { StatisticsComponent } from './doctor-dashboard/statistics/statistics.component';
import { DoctorProfileComponent } from './doctors/doctor-profile/doctor-profile.component';
import { DoctorCardComponent } from './doctors/doctor-profile/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './doctors/doctor-profile/doctor-details/doctor-details.component';
import { DocInfoComponent } from './doctors/doctor-profile/doctor-details/doc-info/doc-info.component';
import { DocAppointmentsComponent } from './doctors/doctor-profile/doctor-details/doc-appointments/doc-appointments.component';
import { DocReviewsComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/doc-reviews.component';
import { AppointmentsTimeCardComponent } from './doctors/doctor-profile/doctor-details/doc-appointments/appointments-time-card/appointments-time-card.component';
import { AppointmentsCheckoutComponent } from './doctors/doctor-profile/doctor-details/doc-appointments/appointments-checkout/appointments-checkout.component';
import { ReviewComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/review/review.component';
import { AddReviewComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/add-review/add-review.component';
import { StarsComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/review/stars/stars.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { AdvicesComponent } from './improve-your-body/advices/advices.component';
import { WorkoutsComponent } from './improve-your-body/workouts/workouts.component';
import { DietComponent } from './improve-your-body/diet/diet.component';
import { HomeComponent } from './home/home.component';
import { EmailsComponent } from './home/emails/emails.component';
import { SearchComponent } from './home/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardsComponent } from './doctors/cards/cards.component';
import { FilterComponent } from './doctors/filter/filter.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientCardComponent } from './patient-profile/patient-card/patient-card.component';
import { EditDocBasicComponent } from './doctor-dashboard/edit-doc-basic/edit-doc-basic.component';
import { EditDocSpecialComponent } from './doctor-dashboard/edit-doc-special/edit-doc-special.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SidebaarComponent } from './patient-profile/sidebaar/sidebaar.component';
import { EditBasicComponent } from './patient-profile/edit-basic/edit-basic.component';
import { EditPatientComponent } from './patient-profile/edit-patient/edit-patient.component';
import { HistoryComponent } from './patient-profile/history/history.component';
import { PatAppointmentsComponent } from './patient-profile/pat-appointments/pat-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HomeComponent,
    SidebarComponent,
    PatientsComponent,
    AppointmentsComponent,
    AllComponent,
    PendingComponent,
    CompletedComponent,
    ReferralsComponent,
    DocTimeslotsComponent,
    StatisticsComponent,
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
    EmailsComponent,
    SearchComponent,
    FooterComponent,
    NavBarComponent,
    LogInComponent,
    SignUpComponent,
    PatientProfileComponent,
    CardsComponent,
    FilterComponent,
    DoctorsComponent,
    PatientCardComponent,
    EditDocBasicComponent,
    PatientProfileComponent,
		SidebaarComponent,
		EditBasicComponent,
		EditPatientComponent,
    HistoryComponent,
    AppointmentsComponent,
    PatAppointmentsComponent,
    EditDocSpecialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
