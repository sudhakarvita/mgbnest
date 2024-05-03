import { IsMongoId, IsDate, IsNumber, IsString } from 'class-validator';

export class PaymentDto {
     @IsMongoId()
     cId: string;

     @IsMongoId()
     sId: string;

     @IsDate()
     sEndDate: Date;

     @IsNumber()
     sRemainAlbums: number;

     @IsNumber()
     amountPaid: number;

     @IsString()
     transactionID: string;

     @IsNumber()
     pStatus: number;

     @IsDate()
     paymentAt: Date;
}
