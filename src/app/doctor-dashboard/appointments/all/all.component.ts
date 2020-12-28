import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment.model';
import { Doctor } from 'src/app/models/Doctor.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  appointments:Appointment[];
  doctors:Doctor[];

  @Input('filter') filter:string='All';
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {

    this.http.get<Appointment[]>('http://localhost:8080/api/doctors/my-profile/my-appointments').toPromise()
    .then(appointments=>{
      this.appointments=appointments.filter(value=>{
        
        switch (this.filter) {
          case 'All':
            return value;

          case 'Pending':
            return !value.completed;

          case 'Completed':
            return value.completed;

          case 'Referred':
            return value.referred;
        
        }
        
      });
    })

    this.http.get<Doctor[]>('http://localhost:8080/api/doctors/all').toPromise()
    .then((doctors)=>{
      this.doctors=doctors;
    })
  }

  markCompleted(marked:boolean,id:string,index:number){
    if(marked) return;

    this.http.patch(`http://localhost:8080/api/doctors/appointments/${id}/mark-as-completed`,null).toPromise()
    .then(()=>{
      marked=true;
      this.appointments[index].completed=true;
    })
  }

  onSubmit(form:NgForm,_appId:string,index:number){
    this.http.post<{'message':string}>(`http://localhost:8080/api/doctors/refer-patient?doctor=${form.value.doctorId}&appointment=${_appId}`,null)
    .toPromise()
    .then(result=>{
      this.appointments.splice(index,1);
      alert(result.message);
    })
  }

  goToPatient(patientId){
    this.route.navigate(['patients',patientId,'card']);
  }

}
