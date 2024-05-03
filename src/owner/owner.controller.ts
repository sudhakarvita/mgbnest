import { Controller,Post,Get,Put,Delete,Body,Param,HttpException,HttpStatus } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerDto } from './dto/owner.dto';


@Controller('owner')
export class OwnerController {
    constructor( private ownerService:OwnerService ){}

    @Post()
    async create(@Body() ownerDto:OwnerDto):Promise<any>{
        try{
            const newOwner = await this.ownerService.create(ownerDto)
            return newOwner
        }catch(error){
            throw new HttpException({ error:'failed to create owner' },HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Get()
    async findAll():Promise<any>{
        try{
            const allOwners = await this.ownerService.findAll()
            return allOwners
        }catch(error){
            throw new HttpException({ error:'owners not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Owner = await this.ownerService.findOne(id)
            return  Owner
        }catch(error){
            throw new HttpException({ error:'owner not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() ownerDto:OwnerDto):Promise<any>{
        try{
            const updateOwner = await this.ownerService.update(id,ownerDto)
            return updateOwner
        }catch(error){
            throw new HttpException({error:' failed to update owner'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<any>{
        try{
            const deletedOwner = await this.ownerService.remove(id)
            return  deletedOwner 
        }catch(error){
            throw new HttpException({error:'failed to delete owner'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }
}
