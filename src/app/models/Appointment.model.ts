import { Patient } from './Patient.model';

export interface Appointment{
  id?: string;
  patient:Patient;
  date?: Date;
  completed?: Boolean;
  referred?: Boolean;
}
