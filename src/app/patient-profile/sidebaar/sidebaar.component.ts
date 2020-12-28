import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor.model';
import { Patient } from 'src/app/models/Patient.model';
import { User } from 'src/app/models/User.model';
import { SignUpService } from "src/app/sign-up/sign-up.service";

@Component({
	selector: 'app-sidebaar',
	templateUrl: './sidebaar.component.html',
	styleUrls: ['./sidebaar.component.css']
})
export class SidebaarComponent implements OnInit,OnDestroy {

	patient: Patient
	id: string;
	currentuser: User;
	showPrivateStuff=false;

	subs:Subscription;
	constructor(private route: Router, private http: HttpClient,
		private route1: ActivatedRoute, private authSignUp: SignUpService) {

		// this.route1.params
		// 	.subscribe(params => console.log("params: ", params));
	}

	ngOnInit(): void {
		this.subs=this.authSignUp.currentUserData.subscribe((user) => {
			this.id = this.route1.parent.snapshot.params['id'] || this.route1.snapshot.params['id'];
			this.currentuser = user;
			if(this.currentuser._id===this.id) this.showPrivateStuff=true;
			console.log("id of patient user: ", this.id);
			console.log("id of current user: ", this.currentuser._id);

		})
	}

	ngOnDestroy(){
		this.subs.unsubscribe();
	}

}
