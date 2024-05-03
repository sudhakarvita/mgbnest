import { IsMongoId, IsDate,IsString } from 'class-validator';
import { generateAlbumId } from '../../orders/schema/generateId';

export class OrdersDto{
    @IsMongoId()
    cId:string

    @IsMongoId()
    aId:string

    @IsMongoId()
    pId:string

    @IsString()
    albumId:string = generateAlbumId()

    image:string

    oStatus:number

    @IsDate()
    orderAt:Date
}