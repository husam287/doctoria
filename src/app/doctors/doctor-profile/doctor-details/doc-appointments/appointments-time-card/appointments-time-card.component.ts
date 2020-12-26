import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Appointment } from 'src/app/models/Appointment.model';

@Component({
  selector: 'app-appointments-time-card',
  templateUrl: './appointments-time-card.component.html',
  styleUrls: ['./appointments-time-card.component.css']
})
export class AppointmentsTimeCardComponent implements OnInit {

  @Input('slots') slots:string[];
  @Input('day') day:string;
  @Input('clickObs') clickObs:Subject<string[]>;
  constructor() { }

  ngOnInit(): void {
  }


  chooseAppointment(day:string,slot:string){
    this.clickObs.next([day,slot]);
  }

}
