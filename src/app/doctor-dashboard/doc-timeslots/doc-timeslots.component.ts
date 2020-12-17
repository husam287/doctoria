import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-timeslots',
  templateUrl: './doc-timeslots.component.html',
  styleUrls: ['./doc-timeslots.component.css']
})
export class DocTimeslotsComponent implements OnInit {
  weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  slots = ['9:00AM','1:00PM','4:00PM'];


  constructor() { }

  ngOnInit(): void {
  }

}
