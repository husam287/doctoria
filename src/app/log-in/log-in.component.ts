import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit(form: NgForm){
  console.log(form);
} */
   onSubmit(){
     this.submitted=true;
     const post: Post=this.loginform.value;
   }
}
