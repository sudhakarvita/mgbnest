import { Controller ,Post,Get,Put,Delete,Body,Param,HttpException,HttpStatus, UploadedFile, UseInterceptors} from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateDto } from './dto/template.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('template')
export class TemplateController {
    constructor( private templateService:TemplateService){}

    @Post()
    @UseInterceptors(FileInterceptor('tImage', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = `${Date.now()}${path.extname(file.originalname)}`;
                cb(null, fileName);
            }
        })
    }))

    async create(@UploadedFile() file, @Body() templateDto: TemplateDto): Promise<any> {
        try {
            const image = file.filename; 
            const newTemplate = await this.templateService.create({ ...templateDto, tImage: image });
            return newTemplate;
        } catch (error) {
            throw new HttpException({ error: 'failed to create template' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    @Get()
     async findAll():Promise<any>{
         try{
             const allTemplates = await this.templateService.findAll()
             return allTemplates
         }catch(error){
             throw new HttpException({ error:'templates not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }        
     };
 
     @Get(':id')
     async findOne(@Param('id') id:string):Promise<any>{
         try{
             const Template = await this.templateService.findOne(id)
             return  Template
         }catch(error){
             throw new HttpException({ error:'Template not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     }
 
     @Put(':id')
     async update(@Param('id') id:string, @Body() templateDto: TemplateDto):Promise<any>{
         try{
             const updateTemplate = await this.templateService.update(id,templateDto)
             return updateTemplate
         }catch(error){
             throw new HttpException({error:' failed to update Template'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     };
 
     @Delete(':id')
     async remove(@Param('id') id:string):Promise<any>{
         try{
             const deletedTemplate = await this.templateService.remove(id)
             return  deletedTemplate 
         }catch(error){
             throw new HttpException({error:'failed to delete Template'},HttpStatus.INTERNAL_SERVER_ERROR) 
         }
     }
}
