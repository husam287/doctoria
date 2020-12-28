<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timeslot } from 'src/app/models/Timeslot.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
=======
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


>>>>>>> f186bc3e45f2b135d0db00a7ff2f41e9cb701eee

@Component({
  selector: 'app-doc-timeslots',
  templateUrl: './doc-timeslots.component.html',
  styleUrls: ['./doc-timeslots.component.css']
})
<<<<<<< HEAD
export class DocTimeslotsComponent implements OnInit,OnDestroy,AfterViewInit {
  weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  slots = [];

  realTimeSlot:Timeslot

  selectedWeekdays = [];
  selectedSlots = [];

  subs:Subscription;
  constructor(private authService:SignUpService,private http:HttpClient) {
    for (let i = 0; i < 24; i++) {
      if (i < 10) this.slots.push(`0${i}:00`);
      else this.slots.push(`${i}:00`);
    }
  }
=======
export class DocTimeslotsComponent implements OnInit {
  weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  slots = ['09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00'];
  @ViewChild('f1') timeslotform:NgForm;
  submitted = false;

  constructor(private http: HttpClient) { }
>>>>>>> f186bc3e45f2b135d0db00a7ff2f41e9cb701eee

  ngOnInit(): void {
    this.subs=this.authService.currentUserData.subscribe(user=>{
      this.realTimeSlot=user.userDetails.timeslot;
    })
  }

<<<<<<< HEAD
  ngAfterViewInit(){
    this.realTimeSlot.days.forEach(element=>{
      document.getElementById(element).click();
    })
    this.realTimeSlot.slots.forEach(element=>{
      document.getElementById(element).click();
    })
    
  }


  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  
  checkWeeks(day: string) {
    if (!this.selectedWeekdays.includes(day)) {
      this.selectedWeekdays.push(day);
    } else {
      let i=this.selectedWeekdays.indexOf(day);
      this.selectedWeekdays.splice(i, 1);

    }

  }

  checkSlots(slot: string) {
    if (!this.selectedSlots.includes(slot)) this.selectedSlots.push(slot);

    else {
      let i =this.selectedSlots.indexOf(slot);
      this.selectedSlots.splice(i, 1);
    }
  }


  onSubmit(){
    const timeslot={days:this.selectedWeekdays,slots:this.selectedSlots};
    console.log(timeslot)
    this.http.put("http://localhost:8080/api/doctors/my-profile/edit-timeslot",timeslot).toPromise()
    .then(result=>{
      this.realTimeSlot.days=timeslot.days;
      this.realTimeSlot.slots=timeslot.slots;
    })
  }


=======
  onSubmit(){

    this.submitted=true;
    const post=this.timeslotform.value;
    console.log(post);
    //this.http.post<>('http://localhost:8080/api/doctors/edit-timeslot',post ).toPromise()
    //.then((data) =>{
    //  console.log('succ:',data);
    //})
    //.catch(err =>{
    //  console.log('error:',err);
  //  })
  }
>>>>>>> f186bc3e45f2b135d0db00a7ff2f41e9cb701eee
}
