import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './schema/customer.schema';
import { CustomerDto } from './dto/customer.dto';
import { generateOTP } from '../customer/schema/OTP.generate';


@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private customerModel:Model<Customer>){}

    async create(customerDto: CustomerDto): Promise<Customer> {
        try {
            if (!customerDto.cOTP) {
                customerDto.cOTP = generateOTP()
            }
            const newCustomer = new this.customerModel(customerDto);
            return await newCustomer.save();
        } catch (error) {
            throw new Error(`Failed to create customer: ${error.message}`);
        }
    }

    async findAll():Promise<Customer[]>{
        return this.customerModel.find().exec()
    };

    async findOne(id:string):Promise<Customer>{
        return this.customerModel.findById(id).exec()
    };

    async update(id:string, customerdto:CustomerDto):Promise<Customer>{
        return this.customerModel.findByIdAndUpdate(id,customerdto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedCustomer = await this.customerModel.findByIdAndDelete(id).exec()
        return deletedCustomer
    }
}
