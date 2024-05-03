import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dispatched } from './schema/dispatched.schema';
import { DispatchedDto } from './dto/dispatched.dto';

@Injectable()
export class DispatchedService {
    constructor(@InjectModel('Dispatched') private dispatchedModel:Model<Dispatched>){}

    async create(dispatchedDto:DispatchedDto):Promise<Dispatched>{
        const newDispatched =  new this.dispatchedModel(dispatchedDto)
        return newDispatched.save()
    };

    async findAll():Promise<Dispatched[]>{
        return this.dispatchedModel.find().exec()
    };

    async findOne(id:string):Promise<Dispatched>{
        return this.dispatchedModel.findById(id).exec()
    };

    async update(id:string, dispatchedDto:DispatchedDto,):Promise<Dispatched>{
        return this.dispatchedModel.findByIdAndUpdate(id,dispatchedDto, {new:true}).exec()
    };

    async remove(id:string):Promise<any>{
        const deletedDispatched =  await this.dispatchedModel.findByIdAndDelete(id).exec()
        return deletedDispatched
    };
}
