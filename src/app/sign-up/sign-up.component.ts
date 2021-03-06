import { Component, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User.model';
import { SignUpService } from "./sign-up.service"
import { Router } from '@angular/router';


// interface AuthSignupData {
//   token: string;
//   userId: string;

// }
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {

  @ViewChild('f1') signupform: NgForm;
  submitted = false;
  constructor(private route: Router, private http: HttpClient, private signupservice: SignUpService) { }

  ngOnInit(): void {
  }



  onSubmit() {
    this.submitted = true;
    const user: User = this.signupform.value;
    this.signupservice.signUp(user).toPromise().then((data) => {
      console.log('success', data);
      alert("Account Created Successfully..!")
      this.route.navigate(['login']);
      
      
      
    }).catch((error) => {
      console.log('Err', error);
      console.log(error.error.errorData[0].msg);
      alert(error.error.errorData[0].msg);
    });

  }



}
