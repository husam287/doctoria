import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocAppointmentsComponent } from './doctor-profile/doctor-details/doc-appointments/doc-appointments.component';
import { DocInfoComponent } from './doctor-profile/doctor-details/doc-info/doc-info.component';
import { DocReviewsComponent } from './doctor-profile/doctor-details/doc-reviews/doc-reviews.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

const routes: Routes = [
  {path:'doctor-profile',component:DoctorProfileComponent,children:[
    {path:'info',component:DocInfoComponent},
    {path:'choose-appointment',component:DocAppointmentsComponent},
    {path:'reviews',component:DocReviewsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
