import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/Patient.model';

@Component({
	selector: 'app-patient-card',
	templateUrl: './patient-card.component.html',
	styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

	patient: Patient

	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {

		this.route1.params
			.subscribe(params => console.log("params: ", params));


	}

	ngOnInit(): void {
		
		const id = this.route1.snapshot.parent.params['id'];
		console.log("id is: ", id);
		this.http.get<Patient>('http://localhost:8080/api/patients/' + id).toPromise()
			.then((patientdata) => {
				console.log('succ:', patientdata);
				this.patient = patientdata;
			})
			.catch(err => {
				console.log('error:', err);

			})

		

	}


}
