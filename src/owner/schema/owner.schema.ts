import { Schema, Document } from 'mongoose';

export const OwnerSchema = new Schema({    
    ownerId: {
        type: String,
        required: true
    },         
    passWord: {
        type:String ,
        required: true
    },
    
    emailId: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    
},
    {timestamps:true}
);

export interface Owner extends Document {
    ownerId:String
    passWord:String
    emailId:String
    phoneNo:String
    role:String
    status:Number
    
}