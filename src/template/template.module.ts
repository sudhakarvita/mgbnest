import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateSchema } from './schema/template.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Template',schema:TemplateSchema}])
  ],
  providers: [TemplateService],
  controllers: [TemplateController]
})
export class TemplateModule {}
