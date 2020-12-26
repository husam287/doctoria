import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignUpService } from "../sign-up/sign-up.service"



interface Post {
  email: string;
  password: string;
}
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('f') loginform:NgForm;

  submitted = false;

  constructor(private http: HttpClient, private loginservice: SignUpService) { }

  ngOnInit(): void {

    this.loginservice.currentUserData.subscribe((data) => {
      console.log(data)
    })
  }

  /*onSubmit(form: NgForm){
  console.log(form);
} */
   onSubmit(){
     this.submitted=true;
     const post: Post=this.loginform.value;
     this.loginservice.logIn(post.email,post.password).subscribe((data) => {
       console.log(data)
     })
     
   }
}
