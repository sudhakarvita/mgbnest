import mongoose, { Schema, Document } from 'mongoose';
import { generateAlbumId } from '../../orders/schema/generateId';

export const OrdersSchema = new Schema({   
     cId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    aId: {
        type:mongoose.Schema.Types.ObjectId,       
    },
    pId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },  
    albumId: {
        type: String,
        default: generateAlbumId,
        unique: true, 
        required: true
    },            
     image: {
        type: String,
        required: true
    },
    oStatus: {
        type: Number,
        default: 1, 
        
    },
    orderAt: {
        type: Date,
        default: Date.now 
    }
},
    {timestamps:true}
);

export interface Orders extends Document {
    
        cId:mongoose.Schema.Types.ObjectId;
        aId:mongoose.Schema.Types.ObjectId;
        pId:mongoose.Schema.Types.ObjectId;
        albumId:String
        image:String
        oStatus:Number
        orderAt:Date
   
}