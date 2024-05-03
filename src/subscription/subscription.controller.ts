import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDto } from './dto/subscription.dto';


@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService:SubscriptionService){}

    @Post()
    async create(@Body() subscriptionDto:SubscriptionDto):Promise<any>{
     try{
         const newSubscription = await this.subscriptionService.create(subscriptionDto)
         return newSubscription
     }catch(error){
         throw new HttpException({error:'failed to create subscription'},HttpStatus.INTERNAL_SERVER_ERROR)
     }
    };
 
     @Get()
     async findAll():Promise<any>{
         try{
             const allSubscriptions = await this.subscriptionService.findAll()
             return allSubscriptions
         }catch(error){
             throw new HttpException({ error:'subscriptions not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }        
     };
 
     @Get(':id')
     async findOne(@Param('id') id:string):Promise<any>{
         try{
             const Subscription = await this.subscriptionService.findOne(id)
             return  Subscription
         }catch(error){
             throw new HttpException({ error:'subscription not found'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     }
 
     @Put(':id')
     async update(@Param('id') id:string, @Body() subscriptionDto:SubscriptionDto):Promise<any>{
         try{
             const updateSubscription = await this.subscriptionService.update(id,subscriptionDto)
             return updateSubscription
         }catch(error){
             throw new HttpException({error:' failed to update subscription'},HttpStatus.INTERNAL_SERVER_ERROR)
         }
     };
 
     @Delete(':id')
     async remove(@Param('id') id:string):Promise<any>{
         try{
             const deletedSubscription = await this.subscriptionService.remove(id)
             return  deletedSubscription 
         }catch(error){
             throw new HttpException({error:'failed to delete subscription'},HttpStatus.INTERNAL_SERVER_ERROR) 
         }
     } 
}
