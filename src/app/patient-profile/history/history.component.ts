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

	constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {}

	ngOnInit(): void {
		const id = this.route1.parent.snapshot.params['id'];
		this.http.get<Patient>
			(`http://localhost:8080/api/patients/${id}`).toPromise()
			.then((patientdata) => {
				console.log('success:', patientdata);
				this.history = patientdata.history;
			})
			.catch(err => {
				console.log('error:', err);

			})

	}

	goToDoctor(id:string){
		this.route.navigate(['doctors',id]);
	}

}
