import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Template } from './schema/template.schema';  
import { TemplateDto } from './dto/template.dto';

@Injectable()
export class TemplateService {
    constructor(@InjectModel('Template') private templateModel:Model<Template>){}

    async create(templateDto:TemplateDto):Promise<Template>{
        const newCustomer = new this.templateModel(templateDto)
        return newCustomer.save()
    };

    async findAll():Promise<Template[]>{
        return this.templateModel.find().exec()
    };

    async findOne(id:string):Promise<Template>{
        return this.templateModel.findById(id).exec()
    };

    async update(id:string, templateDto:TemplateDto):Promise<Template>{
        return this.templateModel.findByIdAndUpdate(id,templateDto, {new:true}).exec()
    }

    async remove(id:string):Promise<any>{
        const deletedProfile = await this.templateModel.findByIdAndDelete(id).exec()
        return deletedProfile
    }
}
