import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToProfile(_id:string){

    this.route.navigate(['doctor-profile','info']);
    
  }

}
