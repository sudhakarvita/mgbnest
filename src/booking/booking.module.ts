import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from './schema/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
  ],
  providers: [BookingService],
  controllers: [BookingController]
})
export class BookingModule {}
