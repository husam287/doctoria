import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/models/Patient.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  chronic:string;
  
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
      this.http.get<Patient>(environment.API_URL+'/patients/my-profile').toPromise()
      .then(patient=>{
        this.chronic=patient.chronicDiseases.toString().trim();
      })
  }


  onSubmit(form:NgForm){
    const chronicDiseases=form.value.chronicDiseases.trim().split(',')

    this.http.put(environment.API_URL+'/patients/my-profile/edit-secondary-info',{chronicDiseases:chronicDiseases}).toPromise()
    .then(result=>{
      console.log(result)
      alert('Edit Saved !!')
    })
    .catch(err=>{
      alert('error!')
    })
  }



}
