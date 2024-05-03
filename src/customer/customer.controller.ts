import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';


@Controller('customer')
export class CustomerController {
    constructor(private customerservice:CustomerService){}

   @Post()
   async create(@Body() customerDto:CustomerDto):Promise<any>{
    try{
        const newCustomer = await this.customerservice.create(customerDto)
       
        return newCustomer
    }catch(error){
        throw new HttpException({error:'failed to create customer'},HttpStatus.INTERNAL_SERVER_ERROR)
    }
   };

    @Get()
    async findAll():Promise<any>{
        try{
            const allCustomers = await this.customerservice.findAll()
            return allCustomers
        }catch(error){
            throw new HttpException({ error:'customers not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Customer = await this.customerservice.findOne(id)
            return  Customer
        }catch(error){
            throw new HttpException({ error:'Customer not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() customerdto:CustomerDto):Promise<any>{
        try{
            const updateCustomer = await this.customerservice.update(id,customerdto)
            return updateCustomer
        }catch(error){
            throw new HttpException({error:' failed to update customer'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<any>{
        try{
            const deletedCustomer = await this.customerservice.remove(id)
            return  deletedCustomer 
        }catch(error){
            throw new HttpException({error:'failed to delete customer'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }

}
