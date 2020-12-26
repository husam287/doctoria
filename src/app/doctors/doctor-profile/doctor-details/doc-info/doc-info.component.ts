import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../../../models/Doctor.model';
import { User } from '../../../../models/User.model';

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.component.html',
  styleUrls: ['./doc-info.component.css']
})
export class DocInfoComponent implements OnInit {

  doctor:Doctor;

  constructor(private route:Router,private http: HttpClient, private route1: ActivatedRoute) { this.route1.params
  .subscribe(params => console.log(params) );}

  ngOnInit(): void {
    //const d = new Date();
    const id = this.route1.parent.snapshot.params['id'];
   this.http.get<Doctor>('http://localhost:8080/api/doctors/'+id).toPromise()
   .then((doctor) =>{
     console.log('succ:',doctor);
      this.doctor = doctor;
      //this.age=d-doctor.basicInfo.birthday;
   })
   .catch(err =>{
     console.log('error:',err);

 })

  }

}
