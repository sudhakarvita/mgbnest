import {  IsNumber } from 'class-validator';

export class CustomerDto {
    cPhone: string;

    @IsNumber()
    cOTP?: number;

    cStatus: number;

   
}