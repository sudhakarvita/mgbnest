import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './schema/profile.schema';
import { ProfileDto } from './dto/profile.dto';


@Injectable()
export class ProfileService {
    constructor(@InjectModel('Profile') private profileModel:Model<Profile>){}

    async create(profileDto:ProfileDto):Promise<Profile>{
        const newCustomer = new this.profileModel(profileDto)
        return newCustomer.save()
    };

    async findAll():Promise<Profile[]>{
        return this.profileModel.find().exec()
    };

    async findOne(id:string):Promise<Profile>{
        return this.profileModel.findById(id).exec()
    };

    async update(id:string, profileDto:ProfileDto):Promise<Profile>{
        return this.profileModel.findByIdAndUpdate(id,profileDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedProfile = await this.profileModel.findByIdAndDelete(id).exec()
        return deletedProfile
    }
}
