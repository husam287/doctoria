import { Patient } from './Patient.model';

export interface Appointment{
  _id?: string;
  patient:Patient;
  date?: Date;
  completed?: Boolean;
  referred?: Boolean;
}
