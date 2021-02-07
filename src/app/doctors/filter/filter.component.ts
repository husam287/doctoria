import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/home/search.service';
import { Doctor } from 'src/app/models/Doctor.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  area: string = '';
  name: string;
  speciality: string = '';
  realDoctorsArray: Doctor[];
  constructor(private http: HttpClient, private searchService: SearchService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<Doctor[]>(environment.API_URL+'/doctors/all').toPromise()
      .then((doctors) => {
        this.realDoctorsArray = doctors;
        this.searchService.doctors.next(doctors);
        //Getting from query params
        if (this.activeRoute.snapshot.queryParams['searchby'] === 'name') {
          this.name = this.activeRoute.snapshot.queryParams['value'];
          this.changingName();
        } else if (this.activeRoute.snapshot.queryParams['searchby'] === 'area') {
          this.area = this.activeRoute.snapshot.queryParams['value'];
          this.changeArea();
        } else if (this.activeRoute.snapshot.queryParams['searchby'] === 'speciality') {
          this.speciality = this.activeRoute.snapshot.queryParams['value'];
          this.changeSpeciality();
        }
      })
      .catch(err => {
        console.log('error:', err);
      })




  }


  onSubmit(form: NgForm) {

  }

  changingName() {
    this.area = '';
    this.speciality = '';
    this.searchService.filterByName(this.name, this.realDoctorsArray);
  }

  changeSpeciality() {
    this.area = '';
    this.name = '';
    this.searchService.filterBySpeciality(this.speciality, this.realDoctorsArray);
  }

  changeArea() {
    this.speciality = '';
    this.name = '';
    this.searchService.filterByArea(this.area, this.realDoctorsArray);
  }

  clear(form: NgForm) {
    this.area = '';
    this.speciality = '';
    this.name = '';
    this.searchService.clearFilter(this.realDoctorsArray);
  }

}
