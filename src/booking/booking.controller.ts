import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus, } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto } from './dto/booking.dto';

@Controller('booking')
export class BookingController {
    constructor(private bookingService:BookingService){}

    @Post()
   async create(@Body() bookingDto:BookingDto):Promise<any>{
    try{
        const newBooking = await this.bookingService.create(bookingDto)
        return newBooking
    }catch(error){
        throw new HttpException({error:'failed to create booking'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };

   @Get()
   async findAll():Promise<any>{
       try{
           const allBookings = await this.bookingService.findAll()
           return allBookings
       }catch(error){
           throw new HttpException({ error:'bookings not found'},HttpStatus.INTERNAL_SERVER_ERROR)
       }        
   };

   @Get(':id')
   async findOne(@Param('id') id:string):Promise<any>{
       try{
           const Booking = await this.bookingService.findOne(id)
           return  Booking
       }catch(error){
           throw new HttpException({ error:'booking not found'},HttpStatus.INTERNAL_SERVER_ERROR)
       }
   }

   @Put(':id')
   async update(@Param('id') id:string, @Body() bookingDto:BookingDto):Promise<any>{
       try{
           const updateBooking = await this.bookingService.update(id,bookingDto)
           return updateBooking
       }catch(error){
           throw new HttpException({error:' failed to update booking'},HttpStatus.INTERNAL_SERVER_ERROR)
       }
   };

   @Delete(':id')
   async remove(@Param('id') id:string):Promise<any>{
       try{
           const deletedBooking = await this.bookingService.remove(id)
           return  deletedBooking 
       }catch(error){
           throw new HttpException({error:'failed to delete Booking'},HttpStatus.INTERNAL_SERVER_ERROR) 
       }
   }
}
