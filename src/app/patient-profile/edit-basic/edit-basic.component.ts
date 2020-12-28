import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Patient } from 'src/app/models/Patient.model';
import { User } from '../../models/User.model';
import { Subscription } from 'rxjs';
import { SignUpService } from 'src/app/sign-up/sign-up.service';


@Component({
  selector: 'app-edit-basic',
  templateUrl: './edit-basic.component.html',
  styleUrls: ['./edit-basic.component.css']
})
export class EditBasicComponent implements OnInit,OnDestroy {
  @ViewChild('f1') editpatientform: NgForm;
  submitted = false;
  subs:Subscription;
  user:User;
  constructor(private http: HttpClient,private authService:SignUpService) { }

  ngOnInit(): void {
    this.subs=this.authService.currentUserData.subscribe(user=>{
      this.user=user;
    })
  }
  
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onSubmit(){
    this.submitted=true;
    const post=this.editpatientform.value;
    this.http.put('http://localhost:8080/api/users/update-basic-info', post).toPromise()
    .then((data) =>{
      alert('Edit Saved!!');
    })
    .catch(err =>{
      alert('error!');
    })
  }

}
