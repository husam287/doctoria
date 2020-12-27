import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../models/Doctor.model';

@Component({
  selector: 'app-edit-doc-special',
  templateUrl: './edit-doc-special.component.html',
  styleUrls: ['./edit-doc-special.component.css']
})
export class EditDocSpecialComponent implements OnInit {
  @ViewChild('f1') editdoc2form: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    const post: Doctor=this.editdoc2form.value;
    this.http.put('http://localhost:8080/api/doctors/my-profile/edit-secondary-info', post).toPromise()
    .then((data) =>{
      console.log('succ:',data);
    })
    .catch(err =>{
      console.log('error:',err);
    })
  }



}
