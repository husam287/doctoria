import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.closeButton.nativeElement.click();
  }

  payWithCash(){
    this.closeButton.nativeElement.click();
    alert("Booked Successfully! \n Kindlly Come in on time");
  }

}
