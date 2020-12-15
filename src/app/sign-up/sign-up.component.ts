import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f1') signupform:NgForm;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    const user:User=this.signupform.value;
  }

}
