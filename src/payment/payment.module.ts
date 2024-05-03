import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentSchema } from './schema/payment.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Payment', schema: PaymentSchema }]),
      ],
      providers: [PaymentService],
      controllers: [PaymentController]
})
export class PaymentModule {}
