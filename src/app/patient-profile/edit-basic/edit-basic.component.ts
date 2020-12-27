import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient.model';

@Component({
  selector: 'app-edit-basic',
  templateUrl: './edit-basic.component.html',
  styleUrls: ['./edit-basic.component.css']
})
export class EditBasicComponent implements OnInit {
  @Input('patient') patient: Patient
  constructor() { }

  ngOnInit(): void {
  }

}
