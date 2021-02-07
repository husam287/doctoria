import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { Timeslot } from 'src/app/models/Timeslot.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doc-appointments',
  templateUrl: './doc-appointments.component.html',
  styleUrls: ['./doc-appointments.component.css']
})
export class DocAppointmentsComponent implements OnInit, AfterViewInit,OnDestroy {

  timeslot: Timeslot;
  doctor: Doctor;

  clickObserver = new Subject<string[]>();
  selectedDay:string;
  selectedTime:string;


  subs:Subscription;
  constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) { }

  ngAfterViewInit() {
    this.subs=this.clickObserver.subscribe((array)=>{
      this.selectedDay=array[0];
      this.selectedTime=array[1];
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const id = this.route1.parent.snapshot.params['id'];
    this.http.get<Doctor>(environment.API_URL+'/doctors/' + id).toPromise()
      .then((doctor) => {
        this.doctor = doctor;
        this.timeslot = doctor.timeslot;
      })
      .catch(err => {
        console.log('error:', err);

      })


  }

}
