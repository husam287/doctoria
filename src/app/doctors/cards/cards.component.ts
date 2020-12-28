import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../../models/Doctor.model';
import { SearchService } from '../../home/search.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
 doctors=[];

  constructor(private route:Router,private http: HttpClient, private route1: ActivatedRoute,private searchService:SearchService) { }

  ngOnInit(): void {


  this.searchService.doctors.subscribe(doctors=>{
    this.doctors=doctors;
  })
  }

  goToProfile(_id:string){

    this.route.navigate([_id],{relativeTo:this.route1});

  }

}
