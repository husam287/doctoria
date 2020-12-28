import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment.model';
import { Doctor } from 'src/app/models/Doctor.model';

@Component({
  selector: 'app-appointments-checkout',
  templateUrl: './appointments-checkout.component.html',
  styleUrls: ['./appointments-checkout.component.css']
})
export class AppointmentsCheckoutComponent implements OnInit,OnDestroy {

  @ViewChild('closeButton') closeButton:ElementRef;
  @Input('day') day:string;
  @Input('time') time:string;
  @Input('doctor') doctor:Doctor;
  wantToPay:boolean=false;
  constructor(private http:HttpClient,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.closeButton.nativeElement.click();
  }

  payWithCash(){
    this.closeButton.nativeElement.click();
    const doctorId = this.activeRoute.parent.snapshot.params['id'];
    const appointment ={day:this.day,time:this.time};

    this.http.post<{'message':string,'appointment':Appointment}>(`http://localhost:8080/api/patients/make-appointment/${doctorId}`,appointment).toPromise()
    .then(result=>{
      alert(`${result.message}\nKindlly Come in on time`);
    })
  }

}
