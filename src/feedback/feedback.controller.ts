import { Controller,Post,Get,Put,Delete,Body,Param,HttpException,HttpStatus } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackDto } from './dto/feedback.dto';


@Controller('feedback')
export class FeedbackController {
    constructor(private feedbackService:FeedbackService){}

    @Post()
    async create(@Body() feedbackDto:FeedbackDto):Promise<any>{
        try{
            const newFeedback = await this.feedbackService.create(feedbackDto)
            return newFeedback
        }catch(error){
            throw new HttpException({error:'failed to create feedback'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Get()
    async findAll():Promise<any>{
        try{ 
            const allFeedbacks = await this.feedbackService.findAll()
            return allFeedbacks
        }catch(error){
            throw new HttpException({error:'feedbacks not found'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Feedback = await this.feedbackService.findOne(id)
            return Feedback
        }catch(error){
            throw new HttpException({error:'feedback not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

   @Put(':id')
   async update(@Param('id') id:string, @Body() feedbackDto:FeedbackDto):Promise<any>{
    try{
        const updateFeedback = await this.feedbackService.update(id,feedbackDto)
        return updateFeedback
    }catch(error){
        throw new HttpException({error:'failed to update Feedback'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };

   @Delete(':id')
   async remove(@Param('id') id:string):Promise<any>{
    try{
        const updateFeedback = await this.feedbackService.remove(id)
        return updateFeedback
    }catch(error){
        throw new HttpException({error:'failed to delete feedback'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };
}
