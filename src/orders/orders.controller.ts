import { Controller,Post,Get,Put,Delete,Body,Param, HttpException, HttpStatus, UploadedFile, UseInterceptors } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersDto } from './dto/orders.dto';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';




@Controller('orders')
export class OrdersController {
    ordersModel: any;
    constructor( private orderService:OrdersService){}

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = `${Date.now()}${path.extname(file.originalname)}`;
                cb(null, fileName);
            }
        })
    }))

    // async create(@UploadedFile() file, @Body() ordersDto: OrdersDto): Promise<any> {
        
    //     try {
    //         const imageUrl = file.filename; 

    //         const newOrder = await this.orderService.create({ ...ordersDto, image: imageUrl, });
    //         return newOrder;
    //     } catch (error) {
    //         throw new HttpException({ error: 'failed to create order' }, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // };

    async create(@UploadedFile() file, @Body() ordersDto: OrdersDto): Promise<any> {
        try {
            const address = await this.orderService.getCustomerAddressId(ordersDto.cId);
            
            const aId = String(address._id);
            const imageUrl = file.filename;
            if (!imageUrl) {
                throw new Error('Image URL is missing');
            }
            ordersDto.aId = aId
            ordersDto.image = imageUrl
           
            // Create a new order with customer address id
            const newOrder = await this.orderService.create({ ...ordersDto });
            return newOrder;
        } catch (error) {
            throw new Error(`Failed to create order: ${error.message}`);
        }
    };

    @Get()
    async findAll():Promise<any>{
        try{
            const allOrders = await this.orderService.findAll()
            return allOrders
        }catch(error){
            throw new HttpException({ error:'owners not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    };

    @Get(':id')
    async findOne(@Param('id') id:string):Promise<any>{
        try{
            const Order = await this.orderService.findOne(id)
            return  Order
        }catch(error){
            throw new HttpException({ error:'order not found'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() ordersDto: OrdersDto):Promise<any>{
        try{
            const updateOrder = await this.orderService.update(id,ordersDto)
            return updateOrder
        }catch(error){
            throw new HttpException({error:' failed to update order'},HttpStatus.INTERNAL_SERVER_ERROR)
        }
    };

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<any>{
        try{
            const deletedOrder = await this.orderService.remove(id)
            return  deletedOrder 
        }catch(error){
            throw new HttpException({error:'failed to delete order'},HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }
    
}


