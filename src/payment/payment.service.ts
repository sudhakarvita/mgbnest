import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './schema/payment.schema';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentService {
    constructor(@InjectModel('Payment') private paymentModel:Model<Payment>){}

    async create(paymentDto:PaymentDto):Promise<Payment>{
        const newPayment = new this.paymentModel(paymentDto)
        return newPayment.save()
    };

    async findAll():Promise<Payment[]>{
        return this.paymentModel.find().exec()
    };

    async findOne(id:string):Promise<Payment>{
        return this.paymentModel.findById(id).exec()
    };

    async update(id:string, paymentDto:PaymentDto):Promise<Payment>{
        return this.paymentModel.findByIdAndUpdate(id,paymentDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedPayment = await this.paymentModel.findByIdAndDelete(id).exec()
        return deletedPayment
    }
}
