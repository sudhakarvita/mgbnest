import { IsMongoId } from 'class-validator';

export class ProfileDto{
     @IsMongoId()
     cId:string

     Fname:string
     Lname:string
     Gender: 'Male' | 'Female' ;
     Email:string
     Picture:string
   
}