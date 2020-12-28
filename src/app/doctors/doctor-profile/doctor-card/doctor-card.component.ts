import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../../models/Doctor.model';
import { DoctorProfileComponent } from '../doctor-profile.component';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
  @Input('doctor') doctor: Doctor
  constructor() { }

  ngOnInit(): void {
  }

}
