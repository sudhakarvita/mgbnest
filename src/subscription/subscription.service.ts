import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './schema/subscription.schema';
import { SubscriptionDto } from './dto/subscription.dto';


@Injectable()
export class SubscriptionService {
    constructor(@InjectModel('Subscription') private subscriptionModel:Model<Subscription>){}

    async create(subscriptionDto:SubscriptionDto):Promise<Subscription>{
        const newSubscription = new this.subscriptionModel(subscriptionDto)
        return newSubscription.save()
    };

    async findAll():Promise<Subscription[]>{
        return this.subscriptionModel.find().exec()
    };

    async findOne(id:string):Promise<Subscription>{
        return this.subscriptionModel.findById(id).exec()
    };

    async update(id:string, subscriptionDto:SubscriptionDto):Promise<Subscription>{
        return this.subscriptionModel.findByIdAndUpdate(id,subscriptionDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedProfile = await this.subscriptionModel.findByIdAndDelete(id).exec()
        return deletedProfile
    }
}
