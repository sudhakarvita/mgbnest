import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto/profile.dto';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';


@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService){}

    @Post()
    @UseInterceptors(FileInterceptor('Picture', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = `${Date.now()}${path.extname(file.originalname)}`;
                cb(null, fileName);
            }
        })
    }))

    async create(@UploadedFile() file, @Body() profileDto: ProfileDto): Promise<any> {
        try {
            const image = file.filename; 
            const newProfile = await this.profileService.create({ ...profileDto, Picture: image });
            return newProfile;
        } catch (error) {
            throw new HttpException({ error: 'failed to create profile' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
 
     @Get()
     async findAll():Promise<any>{
         try{
             const allProfiles = await this.profileService.findAll()
             return allProfiles
         }catch(error){
             throw new HttpException({ error:'profiles not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }        
     };
 
     @Get(':id')
     async findOne(@Param('id') id:string):Promise<any>{
         try{
             const Profile = await this.profileService.findOne(id)
             return  Profile
         }catch(error){
             throw new HttpException({ error:'profile not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     }
 
     @Put(':id')
     async update(@Param('id') id:string, @Body() profileDto: ProfileDto):Promise<any>{
         try{
             const updateProfile = await this.profileService.update(id,profileDto)
             return updateProfile
         }catch(error){
             throw new HttpException({error:' failed to update profile'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     };
 
     @Delete(':id')
     async remove(@Param('id') id:string):Promise<any>{
         try{
             const deletedProfile = await this.profileService.remove(id)
             return  deletedProfile 
         }catch(error){
             throw new HttpException({error:'failed to delete profile'},HttpStatus.INTERNAL_SERVER_ERROR) 
         }
     }
}
