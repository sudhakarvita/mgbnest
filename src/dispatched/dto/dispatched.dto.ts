import { IsDate} from 'class-validator';

export class DispatchedDto{
    albumId:string
    cPhone: string
    courierN: string
    courierTI: string
    courierURL: string
    courierStatus: number

    @IsDate()
    courierDate: Date
}