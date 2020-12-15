import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocAppointmentsComponent } from './doctors/doctor-profile/doctor-details/doc-appointments/doc-appointments.component';
import { DocInfoComponent } from './doctors/doctor-profile/doctor-details/doc-info/doc-info.component';
import { DocReviewsComponent } from './doctors/doctor-profile/doctor-details/doc-reviews/doc-reviews.component';
import { DoctorProfileComponent } from './doctors/doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { ImproveYourBodyComponent } from './improve-your-body/improve-your-body.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'doctor-profile',component:DoctorProfileComponent,children:[
    {path:'info',component:DocInfoComponent},
    {path:'choose-appointment',component:DocAppointmentsComponent},
    {path:'reviews',component:DocReviewsComponent}
  ]},
  {path:'improve-your-body',component:ImproveYourBodyComponent},
  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
