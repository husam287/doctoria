import { User } from './User.model';
import { Doctor } from './Doctor.model';
import { Appointment } from './Appointment.model';

export interface Patient {
_id?: string;
basicInfo?: User;
chronicDiseases?: [String];
history?: [{doctor:Doctor,date:Date}];
appointments?: [{details:Appointment, doctor:Doctor}];
}
