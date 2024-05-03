import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Owner } from './schema/owner.schema';
import { OwnerDto } from './dto/owner.dto';


@Injectable()
export class OwnerService {
    constructor(@InjectModel ('Owner') private ownerModel:Model<Owner>){}

    async create(ownerDto:OwnerDto):Promise<Owner>{
        const newOwner =  new this.ownerModel(ownerDto)
        return newOwner.save()
    };

    async findAll():Promise<Owner[]>{
        return this.ownerModel.find().exec()
    };

    async findOne(id:string):Promise<Owner>{
        return this.ownerModel.findById(id).exec()
    };

    async update(id:string, ownerDto:OwnerDto):Promise<Owner>{
        return this.ownerModel.findByIdAndUpdate(id,ownerDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedOwner = await this.ownerModel.findByIdAndDelete(id).exec()
        return deletedOwner
    }
}
