import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../models/Doctor.model';
@Component({
  selector: 'app-edit-doc-basic',
  templateUrl: './edit-doc-basic.component.html',
  styleUrls: ['./edit-doc-basic.component.css']
})
export class EditDocBasicComponent implements OnInit {

  @ViewChild('f1') editdocform: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    const post: Doctor=this.editdocform.value;
    this.http.put('localhost:8080/api/users/update-basic-info', post).toPromise()
    .then((data) =>{
      console.log('succ:',data);
    })
    .catch(err =>{
      console.log('error:',err);
    })
  }

}
