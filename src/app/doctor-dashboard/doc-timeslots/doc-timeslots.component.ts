import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-timeslots',
  templateUrl: './doc-timeslots.component.html',
  styleUrls: ['./doc-timeslots.component.css']
})
export class DocTimeslotsComponent implements OnInit {
  weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  slots = ['09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00'];


  constructor() { }

  ngOnInit(): void {
  }

}
