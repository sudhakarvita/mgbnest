import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersSchema } from './schema/orders.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomeraddressSchema } from '../address/schema/address.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Orders', schema:OrdersSchema},{ name:'Customeraddress', schema:CustomeraddressSchema}, ])
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
