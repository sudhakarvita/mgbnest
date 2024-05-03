import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schema/booking.schema';
import { BookingDto } from './dto/booking.dto';



@Injectable()
export class BookingService {
    constructor(@InjectModel ('Booking') private bookingModel:Model<Booking>){}

    async create(bookingDto:BookingDto):Promise<Booking>{
        const newBooking = new this.bookingModel(bookingDto)
        return newBooking.save()
    };

    async findAll():Promise<Booking[]>{
        return this.bookingModel.find().exec()
    };

    async findOne(id:string):Promise<Booking>{
        return this.bookingModel.findById(id).exec()
    };

    async update(id:string, bookingDto:BookingDto):Promise<Booking>{
        return this.bookingModel.findByIdAndUpdate(id,bookingDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedBooking = await this.bookingModel.findByIdAndDelete(id).exec()
        return deletedBooking
    }
}
