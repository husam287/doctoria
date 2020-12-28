import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../models/Doctor.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-edit-doc-special',
  templateUrl: './edit-doc-special.component.html',
  styleUrls: ['./edit-doc-special.component.css']
})
export class EditDocSpecialComponent implements OnInit,OnDestroy {
  @ViewChild('f1') editdoc2form: NgForm;
  submitted = false;
  user:User;

  subs:Subscription;
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
    const post: Doctor=this.editdoc2form.value;
    this.http.put('http://localhost:8080/api/doctors/my-profile/edit-secondary-info', post).toPromise()
    .then((data) =>{
      const opject1 ={
        area:post.area,
        fees:post.fees,
        speciality:post.speciality
      }
      this.user.userDetails=opject1;
      this.authService.currentUserData.next(this.user);

      console.log('succ:',data);

      alert("Data Modified Successfully")


    })
    .catch(err =>{
      console.log('error:',err);
    })
  }



}
