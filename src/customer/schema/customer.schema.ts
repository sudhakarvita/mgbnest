import { Schema, Document } from 'mongoose';
import { generateOTP } from '../../customer/schema/OTP.generate';

export const CustomerSchema = new Schema({    
    cPhone: {
        type: String,
        required: true
    },         
    cOTP: {
        type: Number,
        required: true
    },
    
    cStatus: {
       type: Number,
       default:1
    },
    
},
    {timestamps:true}
);

CustomerSchema.pre<Customer>('save', function (next) {
   
    this.cOTP = generateOTP();
    next();
});

export interface Customer extends Document {
    cPhone:String
    cOTP:Number
    cStatus:Number
    
}