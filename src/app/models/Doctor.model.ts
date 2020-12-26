import { User } from './User.model';
import { Patient } from './Patient.model';
import { Appointment } from './Appointment.model';
import { Timeslot } from './Timeslot.model';
import { Review } from './Review.model';

export interface Doctor {
  _id?: string
  basicInfo?: User;
  area: string;
  speciality: string;
  fees: number;
  patients?: [Patient];
  appointments?: [Appointment];
  timeslot?: Timeslot;
  reviews?: [Review];
}
