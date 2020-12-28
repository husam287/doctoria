import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timeslot } from 'src/app/models/Timeslot.model';
import { User } from 'src/app/models/User.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';

@Component({
  selector: 'app-doc-timeslots',
  templateUrl: './doc-timeslots.component.html',
  styleUrls: ['./doc-timeslots.component.css']
})
export class DocTimeslotsComponent implements OnInit,OnDestroy,AfterViewInit {
  weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  slots = [];

  realTimeSlot:Timeslot
  user:User;

  selectedWeekdays = [];
  selectedSlots = [];

  subs:Subscription;
  constructor(private authService:SignUpService,private http:HttpClient) {
    for (let i = 0; i < 24; i++) {
      if (i < 10) this.slots.push(`0${i}:00`);
      else this.slots.push(`${i}:00`);
    }
  }

  ngOnInit(): void {
    this.subs=this.authService.currentUserData.subscribe(user=>{
      this.user=user;
      this.realTimeSlot=this.user.userDetails.timeslot;
    })
  }

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
    const timeslot:Timeslot={days:this.selectedWeekdays,slots:this.selectedSlots};
    console.log(timeslot)
    this.http.put('http://localhost:8080/api/doctors/edit-timeslot',timeslot).toPromise()
    .then(result=>{
      this.realTimeSlot.days=timeslot.days;
      this.realTimeSlot.slots=timeslot.slots;
      this.user.userDetails.timeslot=this.realTimeSlot;
      this.authService.currentUserData.next(this.user);
      
    })
    .catch(err=>{
      console.log(err);
    })
  }


}
