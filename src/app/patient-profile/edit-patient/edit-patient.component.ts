import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient.model';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  @Input('patient') patient: Patient
    
  constructor() { }
  
  ngOnInit(): void {
      
  }
  choronic = 'insomnia';
}
