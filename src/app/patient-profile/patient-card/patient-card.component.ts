import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/Patient.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-patient-card',
	templateUrl: './patient-card.component.html',
	styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

	patient: Patient

	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {}

	ngOnInit(): void {

		const id = this.route1.parent.snapshot.params['id'];
		
		this.http.get<Patient>(environment.API_URL+'/patients/' + id).toPromise()
			.then((patientdata) => {
				console.log('succ:', patientdata);
				this.patient = patientdata;
			})
			.catch(err => {
				console.log('error:', err);

			})



	}


}
