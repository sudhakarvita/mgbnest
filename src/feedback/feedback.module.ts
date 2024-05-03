import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackSchema } from './schema/feedback.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Feedback', schema:FeedbackSchema}])
  ],
  providers: [FeedbackService],
  controllers: [FeedbackController]
})
export class FeedbackModule {}
