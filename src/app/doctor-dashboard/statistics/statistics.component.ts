import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment.model';
import { User } from 'src/app/models/User.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit,OnDestroy {

  users:User;
  subs:Subscription;
  
  appointments:Appointment[];
  constructor(private authService:SignUpService,private http:HttpClient) { }

  ngOnInit(): void {
    this.subs=this.authService.currentUserData.subscribe(user=>{
      this.users=user;
      console.log(this.refers)
    })
    this.http.get<Appointment[]>(environment.API_URL+'/doctors/my-profile/my-appointments').toPromise()
    .then((appointments)=>{
      this.appointments=appointments;
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  get refers(){
    if(!this.appointments) return [];
    return this.appointments.filter((value)=>{
      return value.referred;
    })
  }
  get pending(){
    if(!this.appointments) return [];

    return this.appointments.filter(value=>{
      return !value.completed;
    })
  }
  get completed(){
    if(!this.appointments) return [];

    return this.appointments.filter(value=>{
      return value.completed;
    })
  }

}
