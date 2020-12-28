import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Patient } from 'src/app/models/Patient.model';
import { User } from '../../models/User.model';


@Component({
  selector: 'app-edit-basic',
  templateUrl: './edit-basic.component.html',
  styleUrls: ['./edit-basic.component.css']
})
export class EditBasicComponent implements OnInit {
  @ViewChild('f1') editpatientform: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    const post=this.editpatientform.value;
    this.http.put('http://localhost:8080/api/users/update-basic-info', post).toPromise()
    .then((data) =>{
      console.log('succ:',data);
    })
    .catch(err =>{
      console.log('error:',err);
    })
  }

}
