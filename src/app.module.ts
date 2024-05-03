import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressModule } from './address/address.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ProfileModule } from './profile/profile.module';
import { PaymentModule } from './payment/payment.module';
import { BookingModule } from './booking/booking.module';
import { OwnerModule } from './owner/owner.module';
import { OrdersModule } from './orders/orders.module';
import { DispatchedModule } from './dispatched/dispatched.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TemplateModule } from './template/template.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mgb'),
    CustomerModule,
    AddressModule,
    SubscriptionModule,
    ProfileModule,
    PaymentModule,
    BookingModule,
    OwnerModule,
    OrdersModule,
    DispatchedModule,
    FeedbackModule,
    TemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
