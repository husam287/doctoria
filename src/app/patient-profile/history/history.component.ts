import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/Patient.model';
import { Doctor } from 'src/app/models/Doctor.model';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

	history: [{ 'doctor': Doctor, 'date': Date }]
	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {

		this.route1.params
			.subscribe(params => console.log("params: ", params));


	}

	ngOnInit(): void {
		const id = this.route1.snapshot.parent.params['id'];
		console.log("id in history: ", id);
		this.http.get<[{ 'doctor': Doctor, 'date': Date }]>
			('http://localhost:8080/api/patients/my-profile/my-history').toPromise()
			.then((patientdata) => {
				console.log('success:', patientdata);
				this.history = patientdata;
			})
			.catch(err => {
				console.log('error:', err);

			})

	}

}
