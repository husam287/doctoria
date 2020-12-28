import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Doctor } from '../../../../../models/Doctor.model';
import { Review } from '../../../../../models/Review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: [Review]
  constructor(private route: Router, private http: HttpClient, private route1: ActivatedRoute) {
    this.route1.params
    .subscribe(params => console.log(params));
  }

  ngOnInit(): void {

    const id = this.route1.parent.snapshot.params['id'];
    this.http.get<Doctor>('http://localhost:8080/api/doctors/' + id).toPromise()
      .then((doctor) => {
        console.log('succ:', doctor);
        this.reviews = doctor.reviews;
      })
      .catch(err => {
        console.log('error:', err);

      })

  }

}
