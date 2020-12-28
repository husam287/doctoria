import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Doctor } from '../models/Doctor.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  doctors=new Subject<Doctor[]>();


  constructor() { }



  filterByName(name:string,doctorArray:Doctor[]){
    const filteredArray =doctorArray.filter(e=>{
      return e.basicInfo.name.toLocaleLowerCase().match(name.toLocaleLowerCase());
    })
    this.doctors.next(filteredArray);
  }

  filterByArea(area:string,doctorArray:Doctor[]){
    const filteredArray =doctorArray.filter(e=>{
      return e.area===area;
    })
    this.doctors.next(filteredArray);
  }

  filterBySpeciality(speciality:string,doctorArray:Doctor[]){
    const filteredArray =doctorArray.filter(e=>{
      return e.speciality===speciality;
    })
    this.doctors.next(filteredArray);
  }
  
  clearFilter(doctorArray:Doctor[]){
    this.doctors.next(doctorArray);
  }

  
}
