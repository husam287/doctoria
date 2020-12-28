import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { Patient } from 'src/app/models/Patient.model';

@Component({
  selector: 'app-pat-appointments',
  templateUrl: './pat-appointments.component.html',
  styleUrls: ['./pat-appointments.component.css']
})
export class PatAppointmentsComponent implements OnInit {

  appointments:[{'details':Appointment,'doctor':Doctor}];
  constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) { }

  ngOnInit(): void {

		this.http.get<[{'details':Appointment,'doctor':Doctor}]>
			(`http://localhost:8080/api/patients/my-profile/my-appointments`).toPromise()
			.then((appointments) => {
				this.appointments = appointments;
			})
			.catch(err => {
				console.log('error:', err);
			})
  }


  goToDoctor(id:string){
		this.route.navigate(['doctors',id]);
  }
  cancelAppointment(appoId:string,index:number){

    this.http.delete(`http://localhost:8080/api/patients/cancel-appointment/${appoId}`).toPromise()
    .then(result=>{
      this.appointments.splice(index,1);
      alert('Cancelled This Appointment Successfully');
    })
    .catch(err=>{
      alert('Error!!');
    })
  }
}
