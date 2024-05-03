import mongoose, { Schema, Document } from 'mongoose';

export const CustomeraddressSchema = new Schema({    
    cId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },         
    cDoorNo: {
        type: String,
        required: true
    },
    cStreet: {
        type: String,
        required: true
    }, 
    cLandMark: {
        type: String,
        required: true
    },
    cCity: {
        type: String,
        required: true
    },
    cPincode: {
        type: Number,
        required: true
    },
},
    {timestamps:true}
);

export interface Customeraddress extends Document {
    cId:mongoose.Schema.Types.ObjectId
    cDoorNo:String
    cStreet:String
    cLandMark:String
    cCity:String
    cPincode:Number
}