import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './schema/feedback.schema';
import { FeedbackDto } from './dto/feedback.dto';

@Injectable()
export class FeedbackService {
constructor(@InjectModel('Feedback') private feedbackModel:Model<Feedback>){}


async create(feedbackDto:FeedbackDto):Promise<Feedback>{
    const newFeedback =  new this.feedbackModel(feedbackDto)
    return newFeedback.save()
};

async findAll():Promise<Feedback[]>{
    return this.feedbackModel.find().exec()
};

async findOne(id:string):Promise<Feedback>{
    return this.feedbackModel.findById(id).exec()
};

async update(id:string, feedbackDto:FeedbackDto):Promise<Feedback>{
    return this.feedbackModel.findByIdAndUpdate(id,feedbackDto, {new:true}).exec()
};

async remove(id:string):Promise<any>{
    const deletedFeedback =  await this.feedbackModel.findByIdAndDelete(id).exec()
    return deletedFeedback
};

}
