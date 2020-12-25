import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private route:Router,private http: HttpClient) { }

  ngOnInit(): void {

  }

  goToProfile(_id:string){

    this.route.navigate(['doctor-profile','info']);

  }

}
