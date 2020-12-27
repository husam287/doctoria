import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Patient } from '../../models/Patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients:Patient[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Patient[]>('http://localhost:8080/api/doctors/my-profile/my-patients').toPromise()
    .then((patients) =>{
      console.log('succ:',patients);
       this.patients = patients;
    })
    .catch(err =>{
      console.log('error:',err);

  })



  }

}
