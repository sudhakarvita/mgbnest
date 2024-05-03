import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto/payment.dto';


@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService){}

    @Post()
    async create(@Body() paymentDto:PaymentDto):Promise<any>{
     try{
         const newPayment = await this.paymentService.create(paymentDto)
         return newPayment
     }catch(error){
         throw new HttpException({error:'failed to create payment'},HttpStatus.INTERNAL_SERVER_ERROR)
     }
    };
 
     @Get()
     async findAll():Promise<any>{
         try{
             const allPayments = await this.paymentService.findAll()
             return allPayments
         }catch(error){
             throw new HttpException({ error:'payments not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }        
     };
 
     @Get(':id')
     async findOne(@Param('id') id:string):Promise<any>{
         try{
             const Payment = await this.paymentService.findOne(id)
             return  Payment
         }catch(error){
             throw new HttpException({ error:'payment not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     }
 
     @Put(':id')
     async update(@Param('id') id:string, @Body() paymentDto:PaymentDto):Promise<any>{
         try{
             const updateSubscription = await this.paymentService.update(id,paymentDto)
             return updateSubscription
         }catch(error){
             throw new HttpException({error:' failed to update payment'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     };
 
     @Delete(':id')
     async remove(@Param('id') id:string):Promise<any>{
         try{
             const deletedSubscription = await this.paymentService.remove(id)
             return  deletedSubscription 
         }catch(error){
             throw new HttpException({error:'failed to delete subscription'},HttpStatus.INTERNAL_SERVER_ERROR) 
         }
     }
}
