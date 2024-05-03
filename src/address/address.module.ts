import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomeraddressSchema } from './schema/address.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customeraddress', schema: CustomeraddressSchema }]),
  ],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
