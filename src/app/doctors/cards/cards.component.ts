import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../../models/Doctor.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
 doctors=[];

  constructor(private route:Router,private http: HttpClient, private route1: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get<Doctor[]>('http://localhost:8080/api/doctors/all').toPromise()
    .then((doctors) =>{
      console.log('succ:',doctors);
       this.doctors = doctors;
    })
    .catch(err =>{
      console.log('error:',err);

  })
  }

  goToProfile(_id:string){

    this.route.navigate([_id],{relativeTo:this.route1});

  }

}
