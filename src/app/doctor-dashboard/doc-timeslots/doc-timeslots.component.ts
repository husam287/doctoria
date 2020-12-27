import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-doc-timeslots',
  templateUrl: './doc-timeslots.component.html',
  styleUrls: ['./doc-timeslots.component.css']
})
export class DocTimeslotsComponent implements OnInit {
  weekdays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  slots = ['09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00'];
  @ViewChild('f1') timeslotform:NgForm;
  submitted = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

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
}
