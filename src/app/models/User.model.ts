export interface User {
  _id?:string
  name: string;
  email?: string;
  password?: string;
  gender: string;
  phone: string;
  birthday?: Date;
  address?: string;
  photo?: string;
  userType: string;
  userDetails?:string;
}
