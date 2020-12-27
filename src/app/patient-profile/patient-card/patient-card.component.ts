import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-patient-card',
	templateUrl: './patient-card.component.html',
	styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {

		this.route1.params
			.subscribe(params => console.log(params));


	}

	ngOnInit(): void {
		




	}


}
