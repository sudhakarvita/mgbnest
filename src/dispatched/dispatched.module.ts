import { Module } from '@nestjs/common';
import { DispatchedService } from './dispatched.service';
import { DispatchedController } from './dispatched.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DispatchedSchema } from './schema/dispatched.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Dispatched', schema:DispatchedSchema}])
  ],
  providers: [DispatchedService],
  controllers: [DispatchedController]
})
export class DispatchedModule {}
