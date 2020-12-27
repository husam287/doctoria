import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up/sign-up.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'doctoria';

  constructor(private signupService:SignUpService){}

  ngOnInit(){
    this.signupService.autoLogIn();
  }

}