import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './User.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f1') signupform:NgForm;
  submitted = false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    const user:User=this.signupform.value;

    console.log(user);
    this.http.post("http://localhost:8080/api/users/signup",user).toPromise()
    .then((result)=>{
      console.log('succ:',result);
    })
    .catch(err=>{
      console.log('error:',err);
    })


  }

  test(){
    this.http.get("http://localhost:8080/api/doctors/all").toPromise()
    .then((doctors)=>{
      console.log(doctors);
    })
    
  }

}
