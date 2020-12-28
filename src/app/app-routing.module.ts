import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { AllComponent } from './doctor-dashboard/appointments/all/all.component';
import { PendingComponent } from './doctor-dashboard/appointments/pending/pending.component';
import { CompletedComponent } from './doctor-dashboard/appointments/completed/completed.component';
import { ReferralsComponent } from './doctor-dashboard/appointments/referrals/referrals.component';
import { PatientsComponent } from './doctor-dashboard/patients/patients.component';
import { DocTimeslotsComponent } from './doctor-dashboard/doc-timeslots/doc-timeslots.component';
import { DocAppointmentsComponent } from './doctors/doctor-profile/doctor-details/doc-appointments/doc-appointments.component';
import { DocInfoComponent } from './doctors/doctor-profile/doctor-details/doc-info/doc-info.component';
import { DocReviewsComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/doc-reviews.component';
import { DoctorProfileComponent } from './doctors/doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StatisticsComponent } from './doctor-dashboard/statistics/statistics.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { EditDocBasicComponent } from './doctor-dashboard/edit-doc-basic/edit-doc-basic.component';
import { EditDocSpecialComponent } from './doctor-dashboard/edit-doc-special/edit-doc-special.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { HistoryComponent } from './patient-profile/history/history.component';
import { EditBasicComponent } from './patient-profile/edit-basic/edit-basic.component';
import { EditPatientComponent } from './patient-profile/edit-patient/edit-patient.component';
import { PatAppointmentsComponent } from './patient-profile/pat-appointments/pat-appointments.component';
import { PatientCardComponent } from './patient-profile/patient-card/patient-card.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent },
  {
    path: 'doctors/:id', component: DoctorProfileComponent, children: [
      { path: 'info', component: DocInfoComponent },
      { path: 'choose-appointment', component: DocAppointmentsComponent },
      { path: 'reviews', component: DocReviewsComponent }
    ]
  },
  { path: 'improve-your-body', component: ImproveYourBodyComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },



  {
    path: 'doc-dashboard', component: DoctorDashboardComponent, children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'doc-timeslots', component: DocTimeslotsComponent },
      { path: 'edit-doc-basic', component: EditDocBasicComponent },
      { path: 'edit-doc-special', component: EditDocSpecialComponent },

      {
        path: 'appointments', component: AppointmentsComponent, children: [
          { path: 'all', component: AllComponent },
          { path: 'pending', component: PendingComponent },
          { path: 'completed', component: CompletedComponent },
          { path: 'referrals', component: ReferralsComponent }
        ]
      }



    ]
  },

  {
    path: 'patient-profile', component: PatientProfileComponent, children: [
      { path: 'card', component: PatientCardComponent },
      { path: 'appointments', component: PatAppointmentsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'edit-basic', component: EditBasicComponent },
      { path: 'edit-patient', component: EditPatientComponent }

    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
