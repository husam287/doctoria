import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  /*onSubmit(form: NgForm){
  console.log(form);
} */
   onSubmit(){
     this.submitted=true;
     const post: Post=this.loginform.value;
     this.http.post('http://localhost:8080/api/users/login', post).toPromise()
     .then((data) =>{
       console.log('succ:',data);
     })
     .catch(err =>{
       console.log('error:',err);
     })
   }
}
