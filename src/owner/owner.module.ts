import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerSchema } from './schema/owner.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Owner',schema:OwnerSchema }])
  ],
  providers: [OwnerService],
  controllers: [OwnerController]
})
export class OwnerModule {}
