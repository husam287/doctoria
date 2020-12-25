import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f1') signupform: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    const user:User=this.signupform.value;

    this.http.post('http://localhost:8080/api/users/signup', user).toPromise()
    .then((data) =>{
      console.log('succ:',data);
    })
    .catch(err =>{
      console.log('error:',err);
    })
  }



}
