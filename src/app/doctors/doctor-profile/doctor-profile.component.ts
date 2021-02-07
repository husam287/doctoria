import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../../models/Doctor.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-doctor-profile',
	templateUrl: './doctor-profile.component.html',
	styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
	doctor = {};

	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {
		this.route1.params
			.subscribe(params => console.log(params));
	}

	ngOnInit(): void {
		const id = this.route1.snapshot.params['id'];
		this.http.get<Doctor>(environment.API_URL+'/doctors/' + id).toPromise()
			.then((doctor) => {
				console.log('succ:', doctor);
				this.doctor = doctor;
			})
			.catch(err => {
				console.log('error:', err);

			})

	}

}
