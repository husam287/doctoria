import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { SignUpService } from '../sign-up/sign-up.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user:User;
  constructor(private signupService:SignUpService) { }

  ngOnInit(): void {
    this.signupService.currentUserData.subscribe(user=>{
      this.user=user;
    })
  }

  logout(){
    this.signupService.logOut();
  }

}
