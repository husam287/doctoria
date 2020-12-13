import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { AllComponent } from './doctor-dashboard/appointments/all/all.component';
import { PendingComponent } from './doctor-dashboard/appointments/pending/pending.component';
import { CompletedComponent } from './doctor-dashboard/appointments/completed/completed.component';
import { ReferralsComponent } from './doctor-dashboard/appointments/referrals/referrals.component';

const routes: Routes = [
  {path:'appointments' ,component: AppointmentsComponent, children:[
    {path:'all' ,component: AllComponent},
    {path:'pending' ,component: PendingComponent},
    {path:'completed' ,component: CompletedComponent},
    {path:'referrals' ,component: ReferralsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
