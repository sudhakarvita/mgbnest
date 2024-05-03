import { Controller ,Post,Get,Put,Delete,Body,Param,HttpException,HttpStatus} from '@nestjs/common';
import { DispatchedService } from './dispatched.service';
import { DispatchedDto } from './dto/dispatched.dto';


@Controller('dispatched')
export class DispatchedController {
    constructor(private dispatchedService:DispatchedService){}

    @Post()
    async create(@Body() dispatchedDto:DispatchedDto):Promise<any>{
        try{
            const newDispatched = await this.dispatchedService.create(dispatchedDto)
            return newDispatched
        }catch(error){
            throw new HttpException({error:'failed to create dispatched'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Get()
    async findAll():Promise<any>{
        try{ 
            const allDispatches = await this.dispatchedService.findAll()
            return allDispatches
        }catch(error){
            throw new HttpException({error:'Dispatches not found'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Dispatched = await this.dispatchedService.findOne(id)
            return Dispatched
        }catch(error){
            throw new HttpException({error:'dispatched not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

   @Put(':id')
   async update(@Param('id') id:string, @Body() dispatchedDto:DispatchedDto):Promise<any>{
    try{
        const updateDispatched = await this.dispatchedService.update(id,dispatchedDto)
        return updateDispatched
    }catch(error){
        throw new HttpException({error:'failed to update Dispatched'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };

   @Delete(':id')
   async remove(@Param('id') id:string):Promise<any>{
    try{
        const deletedDispatched = await this.dispatchedService.remove(id)
        return deletedDispatched
    }catch(error){
        throw new HttpException({error:'failed to delete dispatched'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };


}
