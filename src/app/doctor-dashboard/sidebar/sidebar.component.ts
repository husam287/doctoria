import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { SignUpService } from 'src/app/sign-up/sign-up.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit ,OnDestroy {

  doctor:User;
  subs:Subscription;
  constructor(private signupService:SignUpService) { }

  ngOnInit(): void {
    this.subs=this.signupService.currentUserData
    .subscribe((doctor)=>{
      this.doctor=doctor;
    })
  }


  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
