import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus, } from '@nestjs/common';
import { AddressService } from './address.service';
import { CustomeraddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
    constructor(private customerAdressservice:AddressService){}

    @Post()
    async create(@Body() customeraddressDto:CustomeraddressDto):Promise<any>{
        try{
            const newcAdress = await this.customerAdressservice.create(customeraddressDto)
            return newcAdress
        }catch(error){
            throw new HttpException({error:'failed to create address'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get()
    async findAll():Promise<any>{
        try{
            const allCaddresses = await this.customerAdressservice.findAll()
            return allCaddresses
        }catch(error){
            throw new HttpException({ error:'address not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Address = await this.customerAdressservice.findOne(id)
            return  Address
        }catch(error){
            throw new HttpException({ error:'address not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() customeraddressDto:CustomeraddressDto):Promise<any>{
        try{
            const updateCaddress = await this.customerAdressservice.update(id,customeraddressDto)
            return updateCaddress
        }catch(error){
            throw new HttpException({error:' failed to update address'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<any>{
        try{
            const deletedAddress = await this.customerAdressservice.remove(id)
            return  deletedAddress 
        }catch(error){
            throw new HttpException({error:'failed to delete address'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }
}
