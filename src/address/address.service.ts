import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customeraddress } from './schema/address.schema';
import { CustomeraddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
constructor(@InjectModel('Customeraddress') private customeraddressModel:Model<Customeraddress>){}

    async create(customeraddressDto:CustomeraddressDto):Promise<Customeraddress>{
        const newCustomeraddress = new this.customeraddressModel(customeraddressDto)
        return newCustomeraddress.save()
    };

    async findAll():Promise<Customeraddress[]>{
        return this.customeraddressModel.find().exec()
    };

    async findOne(id:string):Promise<Customeraddress>{
        return this.customeraddressModel.findById(id).exec()
    };

    async update(id:string, customeraddressDto:CustomeraddressDto):Promise<Customeraddress>{
        return this.customeraddressModel.findByIdAndUpdate(id,customeraddressDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedCustomeraddress = await this.customeraddressModel.findByIdAndDelete(id).exec()
        return deletedCustomeraddress
    }
}
