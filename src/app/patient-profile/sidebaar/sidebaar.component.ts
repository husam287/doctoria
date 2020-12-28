import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor.model';
import { Patient } from 'src/app/models/Patient.model';
import { SignUpService } from "src/app/sign-up/sign-up.service";

@Component({
	selector: 'app-sidebaar',
	templateUrl: './sidebaar.component.html',
	styleUrls: ['./sidebaar.component.css']
})
export class SidebaarComponent implements OnInit {

	patient: Patient
	id: string;
	currentuserid: string;

	constructor(private route: Router, private http: HttpClient,
		private route1: ActivatedRoute, private authSignUp: SignUpService) {

		// this.route1.params
		// 	.subscribe(params => console.log("params: ", params));


	}

	ngOnInit(): void {
		this.id = this.route1.parent.snapshot.params['id'];
		this.authSignUp.currentUserData.subscribe((user) => {
			this.currentuserid = user._id;


			console.log("id of patient user: ", this.id);
			console.log("id of current user: ", this.currentuserid);

		})



		// this.http.get<Patient>
		// 	('http://localhost:8080/api/patients/my-profile/my-history').toPromise()
		// 	.then((patientdata) => {
		// 		console.log('success:', patientdata);
		// 		this.history = patientdata;
		// 	})
		// 	.catch(err => {
		// 		console.log('error:', err);

		// 	})






	}

}
