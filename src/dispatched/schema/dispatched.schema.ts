import { Schema, Document } from 'mongoose';


export const DispatchedSchema = new Schema({    
    albumId: {
        type: String,
        required: true
    },
    cPhone: {
        type: String,
        required: true
    },
    courierN: {
        type: String,
        required: true
    },
    courierTI: {
        type: String,
        required: true
    },
    courierURL: {
        type: String,
        required: true
    },             
    courierStatus: {
       type: Number,
       default:1
    },
    courierDate: {
        type: Date,
        default: Date.now
     },
     
    
},
    {timestamps:true}
);

export interface Dispatched extends Document {
    albumId:string
    cPhone: string
    courierN: string
    courierTI: string
    courierURL: string
    courierStatus: number
    courierDate: Date
    
}