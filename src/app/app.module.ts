import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {​​ Routes , RouterModule }​​ from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmailsComponent } from './home/emails/emails.component';
import { SearchComponent } from './home/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SidebaarComponent } from './patient-profile/sidebaar/sidebaar.component';
import { EditBasicComponent } from './edit-basic/edit-basic.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { HistoryComponent } from './history/history.component';
import { AppointmentsComponent } from './appointments/appointments.component';
const appRoutes: Routes = [
     //{path:'',component:SidebaarComponent},
    //{path:'patient-profile',component:PatientProfileComponent},
     
     { path :'appointments',component:AppointmentsComponent},
     { path:'history',component:HistoryComponent},
     {path:'edit-basic',component:EditBasicComponent},
     {path:'edit-patient',component:EditPatientComponent},
     {path:'home',component:HomeComponent},
     
    
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailsComponent,
    SearchComponent,
    FooterComponent,
    NavBarComponent,
    PatientProfileComponent,
    SidebaarComponent,
    EditBasicComponent,
    EditPatientComponent,
    HistoryComponent,
    AppointmentsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
