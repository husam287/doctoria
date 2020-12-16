import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FilterComponent } from './filter/filter.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientCardComponent } from './patient-profile/patient-card/patient-card.component';
import { AppointmentsComponent } from './patient-profile/appointments/appointments.component';
import { HistoryComponent } from './patient-profile/history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FilterComponent,
    DoctorsComponent,
    PatientCardComponent,
    AppointmentsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
