import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    const value = form.value.name || form.value.area || form.value.speciality;
    const searchInfo = { searchby: form.value.searchby, value: value }

    this.route.navigate(['doctors'], { queryParams: { searchby: searchInfo.searchby, value: searchInfo.value } });

  }


}

