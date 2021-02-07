import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../models/Doctor.model';
import { User } from '../../models/User.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-doc-basic',
  templateUrl: './edit-doc-basic.component.html',
  styleUrls: ['./edit-doc-basic.component.css']
})
export class EditDocBasicComponent implements OnInit,OnDestroy {

  @ViewChild('f1') editdocform: NgForm;
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
    const post=this.editdocform.value;
    this.http.put(environment.API_URL+'/users/update-basic-info', post).toPromise()
    .then((data) =>{
      console.log('succ:',data);
      this.user.name=post.name;
      this.user.address=post.address;
      this.user.birthday=post.birthday;
      this.user.phone=post.phone;
      this.authService.currentUserData.next(this.user);

      alert("Data Modified Successfully")



    })
    .catch(err =>{
      console.log('error:',err);
    })
  }

}
