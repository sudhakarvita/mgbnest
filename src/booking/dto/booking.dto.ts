import { IsDate, IsNumber, IsString } from 'class-validator';


export class BookingDto {
     
     albumId: string;

     @IsNumber()
     oQuantity: number;

     @IsNumber()
     oReorder: number;

     @IsString()
     oNote: string;

     @IsDate()
     bookingAt: Date;

     @IsString()
     bHistory: string;

     @IsNumber()
     bFinal: number;

     @IsNumber()
     bStatus: number;
   
}
