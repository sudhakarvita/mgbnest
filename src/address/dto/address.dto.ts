import { IsMongoId } from 'class-validator';

export class CustomeraddressDto{
     @IsMongoId()
     cId:string

     cDoorNo:string
     cStreet:string
     cLandMark:string
     cCity:string
     cPincode:number
   
}

