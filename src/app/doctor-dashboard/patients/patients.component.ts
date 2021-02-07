import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Patient } from '../../models/Patient.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients:Patient[];

  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {

    this.http.get<Patient[]>(environment.API_URL+'/doctors/my-profile/my-patients').toPromise()
    .then((patients) =>{
      console.log('succ:',patients);
       this.patients = patients;
    })
    .catch(err =>{
      console.log('error:',err);

  })
  }

  goToPatient(patientId:string){
    this.route.navigate(['patients',patientId,'card']);
  }

}
