import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Orders } from './schema/orders.schema';
import { OrdersDto } from './dto/orders.dto';
 import { Customer } from 'src/customer/schema/customer.schema';
import { Customeraddress } from 'src/address/schema/address.schema';
  


@Injectable()
export class OrdersService {
    constructor(@InjectModel ('Orders') private ordersModel:Model<Orders>,
    @InjectModel ('Customeraddress') private customeraddressModel:Model<Customeraddress>
){}
    async create(ordersDto:OrdersDto):Promise<Orders>{
       const newOrder = await this.ordersModel.create(ordersDto)
       return newOrder.save()
    };
    
    async getCustomerAddressId(cId: String): Promise<Customeraddress> {
        console.log(cId,'cId');
        
        try {
            return this.customeraddressModel.findOne({cId:cId}).exec()
        } catch (error) {
            throw new Error(`Failed to get customer address id: ${error.message}`);
        }
    }
     

   
    async findAll():Promise<Orders[]>{
        return this.ordersModel.find().exec()
    };


    async findOne(id:string):Promise<Orders>{
        return this.ordersModel.findById(id).exec()
    };

    async update(id:string, ordersDto:OrdersDto):Promise<Orders>{
        return this.ordersModel.findByIdAndUpdate(id,ordersDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedOrder = await this.ordersModel.findByIdAndDelete(id).exec()
        return deletedOrder
    }
}
